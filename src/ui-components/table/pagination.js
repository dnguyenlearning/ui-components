import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import {withStyles} from "@material-ui/core/styles";
import SearchBar from "./search-bar";
import ChangePage from "./change-page";

const styles = theme => ({
    pagination: {
        background: theme.palette.background.paper,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        "& > div": {
            flexBasis: "33.33%"
        }
    },
    changeRow: {
        display: "flex",
        justifyContent: "flex-end",
        "& select": {
            padding: "3px 5px",
            width: "content-fit",
            borderRadius: 1,
            border: "solid 1px #dfd1ec",
            "&:focus": {
                outline: "none",
            }
        }
    }
});

function Pagination({classes, page, onPageChange, pages, pageSizeOptions, pageSize, onPageSizeChange}) {

    const activePage = page + 1;

    const changePage = (page) => {
        const activePage = page + 1;

        if (page === activePage) {
            return;
        }

        onPageChange(page - 1);
    };

    const handleSearch = (value) => {
    };


    return (
        <Grid className={classes.pagination}>
            <Grid item className={classes.search}>
                <SearchBar />
            </Grid>
            <Grid item className={classes.changePage}>
                <ChangePage
                    changePage={changePage}
                    pages={pages}
                    activePage={activePage}
                />
            </Grid>
            <Grid item className={classes.changeRow}>
                <select value={pageSize} onChange={(e) => onPageSizeChange(Number(e.target.value))}>
                    {pageSizeOptions.map((option, index) => {
                        return <option key={index} value={option}>{option}</option>
                    })}
                </select>
            </Grid>

        </Grid>
    );
}


Pagination.propTypes = {
    onFilterChange: PropTypes.func
};


export default withStyles(styles)(Pagination);


