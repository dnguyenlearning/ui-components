import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";
import withPropsStyles from "../../with-props-styles";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";

const styles = (props, theme) => ({
    root: {
        width: "100%",
        maxWidth: 550,
        position: "relative"
    },
    textField: {
        width: "100%"
    },
    success: {
        color: theme.colors.green
    },
    helperText: {
        fontSize: theme.text.size.input_text
    },
    input: {
        color: theme.palette.primary.main,
        fontSize: theme.text.size.input_text,
        paddingRight: 20
    },
    underlineSuccess: {
        borderBottom: `1px solid ${theme.colors.green}`
    },
    icon: {
        position: "absolute",
        right: 0,
        top: 5,
        "& svg": {
            fontSize: 20
        }
    },
    successIcon: {
        color: theme.colors.green
    },
    errorIcon: {
        color: theme.colors.red
    }
});

function InputText({label, defaultValue, placeholder = "placeholder", handleChange, error, success, classes}) {

    const getHelperText = () => {
        if (error && !success) {
            return <span className={classes.helperText}>Opp! Somethings not right here</span>
        } else if (success && !error) {
            return <span className={`${classes.success} ${classes.helperText}`}>Perfect!</span>
        }
        return null
    };

    return <Grid className={classes.root}>
        <TextField
            label={label}
            defaultValue={defaultValue}
            className={classes.textField}
            InputProps={{
                className: classes.input,
                classes: {
                    placeholder: classes.placeholder,
                    underline: success ? classes.underlineSuccess : ""
                }
            }}
            InputLabelProps={{
                shrink: true
            }}
            error={error}
            helperText={getHelperText()}
            onChange={(e) => handleChange(e.target.value)}
            placeholder={placeholder}
        />
        <Grid item className={classes.icon}>
            {error && <CloseIcon className={classes.errorIcon}/>}
            {success && <CheckIcon className={classes.successIcon}/>}
        </Grid>
    </Grid>
}

InputText.propTypes = {
    label: PropTypes.string,
    defaultValue: PropTypes.string,
    placeholder: PropTypes.string,
    error: PropTypes.bool,
    success: PropTypes.bool,
    classes: PropTypes.object.isRequired,
    handleChange: PropTypes.func
};

export default withPropsStyles(styles)(InputText);
