import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import {withStyles} from "@material-ui/core/styles";
import PropTypes from "prop-types";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ShareIcon from "assets/icons/share.png";
import ViewIcon from "assets/icons/eye.png";
import DownloadIcon from "assets/icons/download.png";
import DeleteIcon from "assets/icons/trash.png";

import PreviewModal from "../../modals/preview-gallery"

const styles = theme => ({
    root: {
        maxWidth: 400,
        position: "relative",
    },
    gridList: {},
    overlay: {
        height: 120,
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        "-webkit-backdrop-filter": "blur(10px)",
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        padding: 20
    },
    description: {
        fontSize: theme.text.size.gallery_description,
        color: theme.colors.white
    },
    actions: {
        marginTop: 10,
        fontSize: theme.text.size.gallery_text_icon,
        color: theme.colors.white
    },
    iconText: {
        display: "flex",
        flexDirection: "column",
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        marginLeft: 5,
        cursor: "pointer",
        "&:hover": {
            color: theme.colors.green
        },
        "& img": {
            maxWidth: 13,
        },
        "& span": {
            position: "absolute",
            bottom: 0
        }
    }
});

function GalleryItem({item, handleShare, handleRemove, handleDownload, classes}) {
    const [openPreview, setOpenPreview] = useState(false);
    const handleClose = ()=> setOpenPreview(false);

    return <Grid container className={classes.root}>
        <GridList cellHeight={370} className={classes.gridList} cols={1}>
            <GridListTile key={item.src} cols={1}>
                <img src={item.src} alt={item.title}/>
            </GridListTile>
        </GridList>
        <Grid container className={classes.overlay} direction={"column"} wrap={"nowrap"}>
            <Grid item container className={classes.description}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet cerested
            </Grid>
            <Grid item container direction={"row"} justify={"flex-end"} className={classes.actions}>
                <Grid
                    item
                    className={classes.iconText}
                    onClick={()=> setOpenPreview(true)}
                >
                    <img src={ViewIcon} style={{
                        maxWidth: 17
                    }} alt={"icon"}/>
                    <span>View</span>
                </Grid>
                <Grid
                    item
                    className={classes.iconText}
                    onClick={() => handleShare(item)}
                >
                    <img src={ShareIcon} alt={"icon"}/>
                    <span>Share</span>
                </Grid>
                <Grid
                    item
                    className={classes.iconText}
                    onClick={() => handleDownload(item)}
                >
                    <img src={DownloadIcon} alt={"icon"}/>
                    <span>Download</span>
                </Grid>
                <Grid
                    item
                    className={classes.iconText}
                    onClick={() => handleRemove(item)}
                >
                    <img src={DeleteIcon} alt={"icon"}/>
                    <span>Remove</span>
                </Grid>
            </Grid>
        </Grid>
        <PreviewModal open={openPreview} handleClose={handleClose} item={item}/>
    </Grid>
}

GalleryItem.propTypes = {
    item: PropTypes.object,
    classes: PropTypes.object.isRequired,
    handleShare: PropTypes.func,
    handleRemove: PropTypes.func,
    handleDownload: PropTypes.func
};

export default withStyles(styles)(GalleryItem);
