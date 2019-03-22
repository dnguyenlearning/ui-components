import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import withPropsStyles from "../with-props-styles";
import CloseIcon from "@material-ui/icons/Close";
import LikeIcon from "assets/icons/like.png";
import WarningIcon from "assets/icons/warning.png";
import InfoIcon from "assets/icons/info.png";

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

function getTextStyle(type, theme) {
    switch (type) {
        case "primary":
            return {
                color: theme.palette.primary.main
            };
        case "success":
            return {
                color: theme.colors.green,
            };
        case "info":
            return {
                color: theme.colors.blue,
            };
        case "warning":
            return {
                color: theme.colors.orange,
            };
        case "danger":
            return {
                color: theme.colors.red,
            };
        default:
            return {
                color: theme.palette.primary.main,
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
        "& img": {
            maxWidth: "100%",
            height: 30
        }
    },
    message: {
        ...getTextStyle(props.type, theme),
        paddingLeft: 10,
        fontSize: theme.text.size.notification_message,
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
            return <img src={LikeIcon} alt="agree icon"/>;
        case "success":
            return <img src={LikeIcon} alt="agree icon"/>;
        case "info":
            return <img src={InfoIcon} alt={"Info icon"} />;
        case "warning":
            return <img src={WarningIcon} alt="agree icon"/>;
        case "danger":
            return <img src={WarningIcon} alt="agree icon"/>;
        default:
            return <img src={LikeIcon} alt="agree icon"/>
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
