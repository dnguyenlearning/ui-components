import React, {useState, useRef} from "react";
import ReactTable from "react-table";
import withPropsStyles from "../with-props-styles";
import 'react-table/react-table.css';
import * as _ from "lodash";
import axios from "axios";
import Pagination from "./pagination";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import CircularProgress from '@material-ui/core/CircularProgress';

import {makeData} from "./make-data-dummy";

const rawData = makeData();

const styles = (props, theme) => ({
    root: {
        boxShadow: theme.boxShadow.table,
        background: theme.palette.background.paper,
        // border: "1px solid black",
        "& .ReactTable": {
            width: "100%",
            fontSize: theme.text.size.table,
            border: "none",
            "& .rt-thead": {
                boxShadow: theme.boxShadow.table_header,
                color: theme.text.color.table_header,
                maxHeight: 60,
                minHeight: 60
            },
            "& .rt-tr-group": {
                boxShadow: theme.boxShadow.table_header,
                maxHeight: 60,
                minHeight: 60,
                color: theme.text.color.table_body
            },
            "& .rt-th": {
                textAlign: "left",
                borderRight: "none",
                paddingLeft: theme.padding.table_content,
                display: "flex",
                alignItems: "center",
            },
            "& .rt-td": {
                borderRight: "none",
                textAlign: "left",
                paddingLeft: theme.padding.table_content,
                display: "flex",
                alignItems: "center"
            }
        }
    }
});

const requestData = async ({fetchApi, pageSize, page, sorted, filtered, globalFiltered, filterOptions}) => {
    console.log("pageSize", pageSize);
    console.log("page", page);
    console.log("sorted", sorted);
    console.log("filtered", filtered);
    console.log("globalFiltered", globalFiltered);

    const response = await axios(fetchApi);
    console.log('response', response)


    return new Promise((resolve, reject) => {
        // You can retrieve your data however you want, in this case, we will just use some local data.
        let filteredData = rawData;

        // You can use the filters in your request, but you are responsible for applying them.
        if (filtered.length) {
            filteredData = filtered.reduce((filteredSoFar, nextFilter) => {
                return filteredSoFar.filter(row => {
                    return (row[nextFilter.id] + "").includes(nextFilter.value);
                });
            }, filteredData);
        }
        // You can also use the sorting in your request, but again, you are responsible for applying it.
        const sortedData = _.orderBy(
            filteredData,
            sorted.map(sort => {
                return row => {
                    if (row[sort.id] === null || row[sort.id] === undefined) {
                        return -Infinity;
                    }
                    return typeof row[sort.id] === "string"
                        ? row[sort.id].toLowerCase()
                        : row[sort.id];
                };
            }),
            sorted.map(d => (d.desc ? "desc" : "asc"))
        );

        // You must return an object containing the rows of the current page, and optionally the total pages number.
        const res = {
            rows: sortedData.slice(pageSize * page, pageSize * page + pageSize),
            pages: Math.ceil(filteredData.length / pageSize)
        };

        // Here we'll simulate a server response with 500ms of delay.
        setTimeout(() => resolve(res), 500);
    });
};


function Table({fetchApi, columns, defaultPageSize = 5, filterOptions, classes}) {
    const [data, setData] = useState([]);
    const [pages, setPages] = useState(null);
    const [loading, setLoading] = useState(true);

    const timeoutRef = useRef(0);

    const [pageSize, setPageSize] = useState(defaultPageSize);
    const [page, setPage] = useState(0);
    const [sorted, setSorted] = useState([]);
    const [filtered, setFiltered] = useState([]);

    const fetchData = ({page, pageSize, sorted, filtered}, instance) => {
        setLoading(true);
        setPage(page);
        setPageSize(pageSize);
        setSorted(sorted);
        setFiltered(filtered);
        requestData({
            page,
            pageSize,
            sorted,
            filtered,
            fetchApi,
            filterOptions
        }).then(res => {
            setData(res.rows);
            setPages(res.pages);
            setLoading(false)
        });
    };

    const onFilteredChange = (globalFiltered) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            setLoading(true);
            requestData({
                page,
                pageSize,
                sorted,
                filtered,
                fetchApi,
                globalFiltered,
                filterOptions
            }).then(res => {
                setData(res.rows);
                setPages(res.pages);
                setLoading(false)
            });
        }, 500)

    };

    return <Grid container className={classes.root}>
        <ReactTable
            PaginationComponent={Pagination}
            onFilteredChange={onFilteredChange}
            manual
            data={data}
            pages={pages}
            loading={loading}
            loadingText={<CircularProgress color={"primary"} />}
            onFetchData={fetchData}
            defaultPageSize={defaultPageSize}
            columns={columns}
        />
    </Grid>


}

Table.propTypes = {
    fetchApi: PropTypes.string,
    columns: PropTypes.array,
    defaultPageSize: PropTypes.number,
    filterOptions: PropTypes.object,
    classes: PropTypes.object.isRequired
};

export default withPropsStyles(styles)(Table);
