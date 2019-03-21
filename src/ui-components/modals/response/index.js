import React from 'react';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import Grid from "@material-ui/core/Grid";
import QWButton from "../../button";
import CloseIcon from "@material-ui/icons/Close";
import CheckIcon from "@material-ui/icons/Check";
import WarningIcon from "@material-ui/icons/Warning";
import withPropsStyles from "../../with-props-styles";

function getModalStyle() {
    return {
        top: `50%`,
        left: `50%`,
        transform: `translate(-50%, -50%)`,
        maxWidth: 480,
        minHeight: 250
    };
}

const styles = (props, theme) => ({
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        outline: 'none',
        padding: "20px 30px"
    },
    modal_icon: {
        "& svg": {
            fontSize: 70,
            color: props.type === "error" ? theme.colors.orange : theme.palette.primary.main
        }
    },
    modal_body: {
        fontSize: theme.text.size.modal_body,
        color: props.type === "error" ? theme.colors.orange : theme.text.color.modal_body
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
    },
    agreeButton: {
        background: props.type === "error" ? theme.colors.orange : theme.palette.primary.main,
        color: theme.colors.white,
        "&:hover":{
            opacity: 0.8,
            background: props.type === "error" ? theme.colors.orange : theme.palette.primary.main,
        }
    }
});

const messageDefault = "With supporting text below as a natural lead-in to additional content.";

function ModalResponse({type, message = messageDefault, handleAgree, open, handleClose, classes, theme}) {
    return <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
    >
        <Grid style={getModalStyle()} spacing={16} container alignItems={"center"} direction={"column"}
              className={classes.paper}>
            <Grid item container justify={"center"} className={classes.modal_icon}>
                {type ==="error" ? <WarningIcon /> :  <CheckIcon/>}
            </Grid>
            <Grid item container justify={"center"} className={classes.modal_body}>
                {message}
            </Grid>
            <Grid item container spacing={8} justify={"center"} className={classes.modal_control}>
                <Grid item>
                    <QWButton
                        size={"small"}
                        onClick={handleClose}
                        variant={"outlined"}
                    >
                        Cancel
                    </QWButton>
                </Grid>
                <Grid item>
                    <QWButton
                        size={"small"}
                        onClick={handleAgree}
                        variant={"contained"}
                        className={classes.agreeButton}
                    >
                        Agree
                    </QWButton>
                </Grid>
            </Grid>
            <Grid className={classes.closeIcon}>
                <CloseIcon onClick={handleClose}/>
            </Grid>
        </Grid>
    </Modal>
}

ModalResponse.propTypes = {
    classes: PropTypes.object.isRequired,
    handleClose: PropTypes.func,
    open: PropTypes.bool,
    message: PropTypes.string,
    handleAgree: PropTypes.func,
    type: PropTypes.string,
};

export default withPropsStyles(styles)(React.memo(ModalResponse));
