import React from "react";
import {withStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

const styles = (theme) =>({
    root: {
        width: 22,
        minWidth: 22,
        height: 22,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: theme.colors.red,
        cursor: "default",
        "&:hover": {
            background: theme.colors.red,
        }
    },
    minus: {
        width: 10,
        height: 2,
        background: theme.colors.white
    }
});


function Mark({classes}){
    return <Button disableRipple={true} className={classes.root}>
        <span className={classes.minus}/>
    </Button>
}

Mark.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Mark);
