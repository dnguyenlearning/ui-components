import React from "react";
import {Link, NavLink} from "react-router-dom";
import PropTypes from "prop-types";

const NavLinkCustom = ({replace, activeClassName, children, ...other})=>{
    return <NavLink replace activeClassName={activeClassName} {...other}>
        {children}
    </NavLink>
};

NavLinkCustom.propTypes = {
    replace: PropTypes.bool,
    children: PropTypes.any,
    activeClassName: PropTypes.string
};

export default NavLinkCustom;
