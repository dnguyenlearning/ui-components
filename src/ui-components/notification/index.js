import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import withPropsStyles from "../with-props-styles";
import InfoIcon from "@material-ui/icons/Info";
import CloseIcon from "@material-ui/icons/Close";
import WarningIcon from "@material-ui/icons/Warning";
import AgreeIcon from "@material-ui/icons/Check"


function getIconStyle(type, theme) {
    switch (type) {
        case "primary":
            return {
                background: theme.palette.primary.main,
                color: theme.colors.white
            };
        case "success":
            return {
                background: theme.colors.green,
                color: theme.colors.white
            };
        case "info":
            return {
                background: theme.colors.blue,
                color: theme.colors.white
            };
        case "warning":
            return {
                background: theme.colors.orange,
                color: theme.colors.white
            };
        case "danger":
            return {
                background: theme.colors.red,
                color: theme.colors.white
            };
        default:
            return {
                background: theme.palette.primary.main,
                color: theme.colors.white
            };
    }
}

const styles = (props, theme) => ({
    root: {
        minHeight: 50,
        maxWidth: 550,
        boxShadow: theme.boxShadow.notification,
        position: "relative"
    },
    icon: {
        ...getIconStyle(props.type, theme),
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 50,
        height: 50,
    },
    message: {
        paddingLeft: 10,
        fontSize: theme.text.size.notification_message
    },
    closeButton: {
        position: "absolute",
        right: 10,
        "&:hover": {
            cursor: "pointer"
        }
    }
});

function getIcon(type) {
    switch (type) {
        case "primary":
            return <AgreeIcon />;
        case "success":
            return <AgreeIcon />;
        case "info":
            return <InfoIcon/>;
        case "warning":
            return <WarningIcon/>;
        case "danger":
            return <WarningIcon/>;
        default:
            return <AgreeIcon />
    }
}

function Notification({type = "primary", message, handleClose, classes}) {
    const Icon = getIcon(type);

    return <Grid container alignItems={"center"} className={classes.root}>
        <Grid item className={classes.icon}>
            {Icon}
        </Grid>
        <Grid item className={classes.message}>
            {message}
        </Grid>
        <Grid className={classes.closeButton}>
            <CloseIcon onClick={handleClose} />
        </Grid>
    </Grid>
}

Notification.propTypes = {
    type: PropTypes.string,
    message: PropTypes.string,
    handleClose: PropTypes.func
};

export default withPropsStyles(styles)(Notification);
