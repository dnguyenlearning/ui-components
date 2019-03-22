import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    tabsRoot: {
        borderBottom: '1px solid #e6e8f1',
    },
    tabsIndicator: {
        backgroundColor: theme.palette.primary.main
    }
});

function TabsCustom({value, children, classes, ...other}){
    return <Tabs
        classes={{
            root: classes.tabsRoot,
            indicator: classes.tabsIndicator
        }}
        value={value}
        {...other}
    >
        {children}
    </Tabs>
}

TabsCustom.propTypes = {
    classes: PropTypes.object.isRequired,
    value: PropTypes.number
};

export default withStyles(styles)(TabsCustom);

