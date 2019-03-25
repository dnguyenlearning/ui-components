import React from "react";
import {withStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

const styles = (theme) => ({
    root: {

    },
    button: {
        minWidth: 80,
        "&:hover": {
            background: "#5d38db",
            color: theme.colors.white
        }
    }
});

function ViewTable({handleView, classes}){
    return <Grid container className={classes.root} justify={"center"} >
        <Grid item>
            <Button onClick={handleView} className={classes.button} variant={"outlined"} >View</Button>
        </Grid>
    </Grid>
}

ViewTable.propTypes = {
    handleView: PropTypes.func,
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ViewTable);
