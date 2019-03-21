import React, {useCallback} from 'react';
import {useDropzone} from 'react-dropzone';
import Grid from "@material-ui/core/Grid";
import withPropsStyles from "../with-props-styles";
import PropTypes from "prop-types"
import QWButton from "../button"

const styles = (props, theme) =>({
    root: {
        maxHeight: 42,
        minHeight: 42,
        maxWidth: 550,
        cursor: "pointer"
    },
    input: {
        background: "#f5f6fa",
        color: theme.text.color.upload_zone,
        flex: 1,
        minHeight: 42,
        display: "flex",
        alignItems: "center",
        paddingLeft: 20,
        marginRight: 10,
        borderRadius: 2
    },
    browse:{

    }
});

function UploadZone({handleAcceptedFile, classes}) {
    const onDrop = useCallback(acceptedFiles => {
        handleAcceptedFile(acceptedFiles)
    }, []);

    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        onDrop,
        accept: 'image/jpeg, image/png'
    });

    return (
        <Grid container className={classes.root} {...getRootProps()} alignItems={"center"}>
            <input {...getInputProps()} />
            <Grid item className={classes.input}>
                Choose a File
            </Grid>
            <Grid item className={classes.browse}>
                <QWButton
                    color={"primary"}
                    variant={"contained"}
                    size={"small"}
                >
                    Browse
                </QWButton>
            </Grid>
        </Grid>
    )
}

UploadZone.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withPropsStyles(styles)(UploadZone)
