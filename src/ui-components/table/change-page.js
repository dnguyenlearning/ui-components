import React from "react";
import Grid from "@material-ui/core/Grid/Grid";
import {withStyles} from "@material-ui/core/styles";
import PropTypes from "prop-types";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const styles = theme => ({
    root: {
        "& svg": {
            fontSize: 15,
            position: "relative",
            top: 2,
            color : "#8954ba",
            cursor: "pointer",
            "&.disabled": {
                color : "#94979b",
                cursor: "default"
            }
        }
    },
    display: {
        fontSize: 14,
    },
    activePage:{
        borderRadius: 1,
        border: "solid 1px #dfd1ec",
        padding: "2px 5px",
        fontFamily: theme.text.font.bold
    }
});

function ChangePage({changePage, activePage, pages, classes}) {
    return <Grid className={classes.root} container spacing={16} justify={"center"} alignItems={"center"}>
        <Grid item className="Table__prevPageWrapper">
            <ArrowBackIcon
                onClick={() => {
                    if (activePage === 1) return;
                    changePage(activePage - 1)
                }}
                className={activePage === 1 ? "disabled" : ""}
            />
        </Grid>

        <Grid item className={classes.display}>
            <span className={classes.activePage}>{activePage}</span> of {pages}
        </Grid>
        <Grid item className="Table__nextPageWrapper">
            <ArrowForwardIcon
                onClick={() => {
                    if (activePage === pages) return;
                    changePage(activePage + 1)
                }}
                className={activePage === pages ? "disabled" : ""}
            />
        </Grid>
    </Grid>
}

ChangePage.propTypes = {
    classes: PropTypes.object.isRequired,
    activePage: PropTypes.number,
    pages: PropTypes.number,
    changePage: PropTypes.func
};


export default withStyles(styles)(ChangePage);
