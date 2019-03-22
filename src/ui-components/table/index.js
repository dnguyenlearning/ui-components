import React, {useState, useEffect} from "react";
import ReactTable from "react-table";
import withPropsStyles from "../with-props-styles";
import 'react-table/react-table.css';
import namor from "namor";
import * as _ from "lodash";
import axios from "axios";
import Pagination from "./pagination"
const styles = (props, theme) => ({});

const columns = [
    {
        Header: "First Name",
        accessor: "firstName"
    },
    {
        Header: "Last Name",
        id: "lastName",
    },
    {
        Header: "Age",
        accessor: "age"
    }
];

const range = len => {
    const arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(i);
    }
    return arr;
};

const newPerson = () => {
    const statusChance = Math.random();
    return {
        firstName: namor.generate({words: 1, numbers: 0}),
        lastName: namor.generate({words: 1, numbers: 0}),
        age: Math.floor(Math.random() * 30),
        visits: Math.floor(Math.random() * 100),
        progress: Math.floor(Math.random() * 100),
        status:
            statusChance > 0.66
                ? "relationship"
                : statusChance > 0.33 ? "complicated" : "single"
    };
};


function makeData(len = 5553) {
    return range(len).map(d => {
        return {
            ...newPerson(),
            children: range(10).map(newPerson)
        };
    });
}

const rawData = makeData();


const requestData = async ({fetchApi = "https://jsonplaceholder.typicode.com/", pageSize, page, sorted, filtered}) => {
    console.log("pageSize", pageSize);
    console.log("page", page);
    console.log("sorted", sorted);
    console.log("filtered", filtered);

    const response  = await axios(fetchApi);
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


function Table({fetchApi}) {
    const [data, setData] = useState([]);
    const [pages, setPages] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchData = ({page, pageSize, sorted, filtered}, instance) => {
        setLoading(true);
        requestData({
            page,
            pageSize,
            sorted,
            filtered,
            fetchApi
        }).then(res => {
            // Now just get the rows of data to your React Table (and update anything else like total pages or loading)
            setData(res.rows);
            setPages(res.pages);
            setLoading(false)
        });
    };

    return <ReactTable
        PaginationComponent={Pagination}
        manual // Forces table not to paginate or sort automatically, so we can handle it server-side
        data={data}
        pages={pages} // Display the total number of pages
        loading={loading} // Display the loading overlay when we need it
        loadingText={<span>Loading Icon</span>}
        onFetchData={fetchData} // Request new data when things change
        defaultPageSize={5}
        className="-striped -highlight"
        columns={columns}
    />
}

Table.propTypes = {};

export default withPropsStyles(styles)(Table);
