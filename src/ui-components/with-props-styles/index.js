import {withStyles} from '@material-ui/core/styles';
import {createElement, forwardRef} from "react";

const withPropsStyles = (style) => {

    const withPropsStyles = (component) => {

        return forwardRef((props, ref) => {

            const proxy = (theme) => style(props, theme)

            const hoc = withStyles(proxy)(component)

            return props.children ?
                createElement(hoc, {...props, ref}, props.children) :
                createElement(hoc, {...props, ref})
        })
    };

    return withPropsStyles
};

export default withPropsStyles;
