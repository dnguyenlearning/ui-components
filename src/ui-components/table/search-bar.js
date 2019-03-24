import React from "react";
import {withStyles} from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";

const styles = theme =>({
    root: {
        maxWidth: 400,
        minWidth: 300,
        "& svg":{
            color: "#979797",
            fontSize: 25
        }
    },
    input: {
        width: "100%",
        border: "none",
        fontSize: 14,
        color: theme.text.color.table_body,
        "&:focus": {
          outline: "none"
        },
        "&::-webkit-input-placeholder": {
            opacity: 0.5
        },
        "&::-moz-placeholder": {
            opacity: 0.5
        },
        "&:-ms-input-placeholder": {
            opacity: 0.5
        },
        "&:-moz-placeholder": {
            opacity: 0.5
        }
    }
});

function SearchBar({handleSearch, classes, ...other}){
    return <Grid className={classes.root} spacing={8} container alignItems={"center"}>
        <Grid item>
            <SearchIcon />
        </Grid>
        <Grid item>
            <input
                onChange={(e)=> handleSearch(e.target.value)}
                className={classes.input}
                type="text"
                placeholder={"Search Data Table..."}
            />
        </Grid>
    </Grid>
}

SearchBar.propTypes = {
    handleSearch: PropTypes.func,
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchBar);
