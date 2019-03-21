import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Grid from "@material-ui/core/Grid";
import QWButton from "../../button";
import CloseIcon from "@material-ui/icons/Close";

function getModalStyle() {
    return {
        top: `50%`,
        left: `50%`,
        transform: `translate(-50%, -50%)`,
        maxWidth: 480,
        minHeight: 250
    };
}

const styles = theme => ({
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        outline: 'none',
        padding: "30px 40px"
    },
    modal_title: {
        fontSize: theme.text.size.modal_title,
        color: theme.palette.primary.main,
    },
    modal_body:{
        fontSize: theme.text.size.modal_body,
        color: theme.text.color.modal_body
    },
    modal_control: {
        paddingTop: theme.padding.modal_control
    },
    closeIcon: {
        position: "absolute",
        top: 10,
        right: 10,
        "&:hover": {
            cursor: "pointer"
        }
    }
});

const messageDefault = "With supporting text below as a natural lead-in to additional content.";

function ModalConfirm({title = "Modal Title", message = messageDefault, handleAgree,  open, handleClose, classes}) {
    return <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
    >
        <Grid style={getModalStyle()} spacing={16} container  alignItems={"center"} direction={"column"}
              className={classes.paper}>
            <Grid item container justify={"flex-start"} className={classes.modal_title}>
                {title}
            </Grid>
            <Grid item container justify={"flex-start"} className={classes.modal_body}>
                {message}
            </Grid>
            <Grid item container spacing={8} justify={"center"} className={classes.modal_control}>
                <Grid item>
                    <QWButton size={"small"} onClick={handleClose} variant={"outlined"}>Cancel</QWButton>
                </Grid>
                <Grid item>
                    <QWButton size={"small"} onClick={handleAgree} variant={"contained"} color={"primary"}>Agree</QWButton>
                </Grid>
            </Grid>
            <Grid className={classes.closeIcon}>
                <CloseIcon onClick={handleClose} />
            </Grid>
        </Grid>
    </Modal>
}

ModalConfirm.propTypes = {
    classes: PropTypes.object.isRequired,
    handleClose: PropTypes.func,
    open: PropTypes.bool,
    title: PropTypes.string,
    message: PropTypes.string,
    handleAgree: PropTypes.func
};

export default withStyles(styles)(React.memo(ModalConfirm));
