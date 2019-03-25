import React from "react";
import {withStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import EditIcon from "@material-ui/icons/EditOutlined";
import DeleteIcon from "@material-ui/icons/DeleteOutline";
import PropTypes from "prop-types";

const styles = (theme) => ({
    root: {
        "& svg": {
            "&:hover": {
                cursor: "pointer",
                color: theme.palette.primary.main
            }
        }
    }
});

function ActionsTable({handleEdit, handleDelete, classes}){
    return <Grid container className={classes.root} justify={"space-around"}>
        <Grid item>
            <EditIcon onClick={handleEdit} />
        </Grid>
        <Grid item>
            <DeleteIcon onClick={handleDelete} />
        </Grid>
    </Grid>
}

ActionsTable.propTypes = {
    handleEdit: PropTypes.func,
    handleDelete: PropTypes.func,
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ActionsTable);
