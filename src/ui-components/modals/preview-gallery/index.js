import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Grid from "@material-ui/core/Grid";
import CloseIcon from "@material-ui/icons/Close";
import GridList from "@material-ui/core/GridList/GridList";
import GridListTile from "@material-ui/core/GridListTile/GridListTile";

function getModalStyle() {
    return {
        top: `50%`,
        left: `50%`,
        transform: `translate(-50%, -50%)`,
        maxWidth: 600,
        minHeight: 250,
        maxHeight: 400
    };
}

const styles = theme => ({
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        outline: 'none',
        "&:hover": {
            "& .overlay": {
                opacity: 0.63,
            }, "& .overlayText": {
                opacity: 1,
            }
        },
        "& .overlay": {
            opacity: 0,
            backgroundImage: `linear-gradient(to right, ${theme.colors.grey}, ${theme.palette.primary.main})`,
            height: "100%",
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            "-webkit-backdrop-filter": "blur(10px)",
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            zIndex: 10,
            transition: "all 0.5s"
        },
        "& .overlayText": {
            opacity: 0,
            height: "100%",
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            "-webkit-backdrop-filter": "blur(10px)",
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            color: theme.colors.white,
            zIndex: 11,
            padding: 35,
            transition: "all 0.5s"
        }
    },
    header: {
        fontSize: theme.text.size.gallery_text_preview_header,
        lineHeight: 1.43,
        letterSpacing: 1.3
    },
    description: {
        fontSize: theme.text.size.gallery_text_preview_content,
        lineHeight: 1.43,
    }

});


function ModalPreview({item, open, handleClose, classes}) {
    return <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
    >
        <Grid style={getModalStyle()} className={classes.paper}>
            <GridList cellHeight={400} className={classes.gridList} cols={1}>
                <GridListTile key={item.src} cols={1}>
                    <img src={item.src} alt={item.title}/>
                </GridListTile>
            </GridList>
            <Grid container className={"overlay"} direction={"column"} wrap={"nowrap"}/>
            <Grid container className={"overlayText"} direction={"column"} wrap={"nowrap"}>
                <Grid item className={classes.header}>
                    <h3>{item.title}</h3>
                </Grid>
                <Grid item className={classes.description}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    At atque cum deserunt dicta dolore dolorem doloribus illum in,
                    ipsa minus molestias nemo possimus quam quod quos reprehenderit
                    repudiandae sequi sit soluta sunt temporibus velit voluptates? Aspernatur,
                    atque, quisquam. Aperiam aspernatur dicta enim et harum impedit in incidunt ipsam,
                </Grid>
            </Grid>
        </Grid>
    </Modal>
}

ModalPreview.propTypes = {
    classes: PropTypes.object.isRequired,
    handleClose: PropTypes.func,
    open: PropTypes.bool,
    item: PropTypes.object
};

export default withStyles(styles)(React.memo(ModalPreview));
