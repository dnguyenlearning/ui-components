import React, {useCallback} from 'react';
import {useDropzone} from 'react-dropzone';
import withPropsStyles from "../with-props-styles";
import PropTypes from "prop-types"
import QWButton from "../button"

const styles = (props, theme) => ({
    root: {
        display: "flex",
        alignItems: "center",
        maxHeight: 42,
        minHeight: 42,
        maxWidth: 550,
        cursor: "pointer",
    },
    input: {
        background: theme.palette.background.paper,
        color: theme.text.color.upload_zone,
        flex: 1,
        minHeight: 42,
        display: "flex",
        alignItems: "center",
        paddingLeft: 20,
        marginRight: 10,
        borderRadius: 2
    },
    browse: {}
});

function UploadZone({handleAcceptedFile, classes}) {
    const onDrop = useCallback(acceptedFiles => {
        handleAcceptedFile(acceptedFiles)
    }, []);

    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        onDrop,
        accept: 'image/jpeg, image/png',
    });

    return (
        <div
            className={classes.root}
            {...getRootProps()}>
            <input {...getInputProps()} />
            <div className={classes.input}>
                {isDragActive ? "Drop Your Items" : "Choose a File"}
            </div>
            <div className={classes.browse}>
                <QWButton
                    color={"primary"}
                    variant={"contained"}
                    size={"small"}
                >
                    Browse
                </QWButton>
            </div>
        </div>
    )
}

UploadZone.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withPropsStyles(styles)(UploadZone)
