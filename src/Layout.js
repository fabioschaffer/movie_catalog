import React from 'react';
import classes from './Layout.module.css';
import Menu from './Menu';
import Bar from './Bar';

const layout = props => {
    return (
        <React.Fragment>
            <header className={classes.Header}>
                <Menu />
                <Bar />
            </header>
            <main className={classes.Position}>
                {props.children}
            </main>
        </React.Fragment>
    );
};

export default layout;