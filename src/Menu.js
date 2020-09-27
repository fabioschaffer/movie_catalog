import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Menu.module.css';

function Menu() {
    return(
        <div className={classes.sidenav}>
            <NavLink to='/'>Dashboard</NavLink>
            <NavLink to='/category'>Categoria</NavLink>
        </div>
    )
};

export default Menu;