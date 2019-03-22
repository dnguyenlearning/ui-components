import React from "react";
import {withStyles} from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Tab from "@material-ui/core/Tab";

const styles = theme =>({
    tabRoot: {
        textTransform: 'initial',
        minWidth: 72,
        fontWeight: theme.typography.fontWeightRegular,
        marginRight: theme.spacing.unit * 4,
        '&:hover': {
            color: theme.palette.primary.main,
            opacity: 1,
        },
        '&$tabSelected': {
            color: theme.palette.primary.main,
            fontWeight: theme.typography.fontWeightMedium,
        },
        '&:focus': {
            color: theme.palette.primary.main,
        },
    },
    tabSelected: {},
});

function TabCustom({classes, ...other}){
    return <Tab
        disableRipple
        classes={{
            root: classes.tabRoot,
            selected: classes.tabSelected
        }}
        {...other}
    />
}

TabCustom.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TabCustom);
