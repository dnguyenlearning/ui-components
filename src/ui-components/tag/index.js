import React from "react";
import withPropsStyles from "../with-props-styles";
import Chip from '@material-ui/core/Chip';
import PropTypes from "prop-types";
import CloseIcon from "@material-ui/icons/Close"

function getChipStyle(type, theme) {
    switch (type) {
        case "active":
            return {
                color: theme.colors.white,
                background: theme.palette.primary.main
            };
        default:
            return {
                color: theme.colors.black
            }
    }
}

const styles = (props, theme) => ({
    root: {
        background: theme.palette.background.paper,
        boxShadow: theme.boxShadow.tag,
        borderRadius: 4,
        ...getChipStyle(props.type, theme),
        "& svg": {
            fontSize: 15,
            color: props.type === "active"
                ? theme.colors.white
                : theme.colors.black
        }
    }
});

function Tag({label = "Label", type = "normal", handleDelete, classes}) {
    return <Chip
        label={label}
        onDelete={handleDelete}
        className={classes.root}
        deleteIcon={<CloseIcon/>}
    />
}

Tag.propTypes = {
    classes: PropTypes.object.isRequired,
    handleDelete: PropTypes.func,
    type: PropTypes.string,
    label: PropTypes.string
};

export default withPropsStyles(styles)(Tag);
