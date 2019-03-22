import React from "react";
import {withStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";

const styles = theme =>({
    root: {
        width: "100%",
        height: 80,
        maxHeight: 80,
        background: theme.palette.background.paper,
        boxShadow: theme.boxShadow.app_bar,
        padding: "0 40px"
    }
});

function AppBar({classes}){
    return <Grid container className={classes.root} alignItems={"center"} justify={"space-between"}>
        <Grid item>
            Logo
        </Grid>
        <Grid item>
            User Image
        </Grid>
    </Grid>
}

AppBar.propTypes = {
    classes: PropTypes.object
};

export default withStyles(styles)(AppBar);
