import React from "react";
import Button from "@material-ui/core/Button";
import {withStyles} from '@material-ui/core/styles';
import PropTypes from "prop-types";

const styles = theme => ({
    root: {
        height: 40,
        minWidth: 180,
        fontSize: theme.text.size.button_medium,
        position: "relative",
        "& svg": {
            position: "absolute",
            left: 20,
            width: 15,
            height: 15
        }
    },
    disabled: {
        background: "#dadada !important",
        color: "#989898 !important"
    },
    sizeSmall:{
        minHeight: 30,
        minWidth: 90,
        fontSize: theme.text.size.button_small
    }
});

function QWButton({children, classes, ...other}){
    return <Button
        classes={{
            root: classes.root,
            disabled: classes.disabled,
            sizeSmall: classes.sizeSmall
        }}
        {...other}
    >
        {children}
    </Button>
}

QWButton.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(QWButton);

