import React from "react";
import PropTypes from "prop-types";
import NavLinkCustom from "../../link";
import Grid from "@material-ui/core/Grid";
import {withStyles} from "@material-ui/core/styles";

const styles = theme => ({
    root: {
        maxWidth: 100,
        minWidth: 100,
        overflow: "hidden",
        height: 92,
        background: theme.palette.primary.main,
        "& a": {
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textDecoration: "none",
            "&.active": {
                borderLeft: `4px solid ${theme.colors.white}`,
                backgroundColor: "rgba(255,255,255, 0.2)",
            },
            "&:hover":{
                backgroundColor: "rgba(255,255,255, 0.2)",
            }
        }
    },
    icon: {
        maxWidth: 30,
        "& img":{
            maxWidth: "100%"
        }
    },
    label: {
        padding: "0 10px",
        textAlign: "center",
        fontSize: theme.text.size.menu_item_label,
        lineHeight: 1.67,
        color: theme.colors.white
    }
});

function MenuItem({icon, label, to, classes}) {
    return <Grid className={classes.root}>
        <NavLinkCustom
            activeClassName='active'
            to={to}>
            <div className={classes.icon}>
                <img src={icon} alt="icon menu"/>
            </div>
            <span className={classes.label}>{label}</span>
        </NavLinkCustom>
    </Grid>
}

MenuItem.propTypes = {
    icon: PropTypes.string,
    label: PropTypes.string,
    to: PropTypes.string,
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MenuItem);
