import React,{useContext} from 'react';
import classes from './Bar.module.css';
import { Context } from './context/context';

function Bar() {
    const context = useContext(Context);

    const LogoutHandler = (e) => {
        e.preventDefault();
        context.logout();
    }

    return (
        <div className={classes.Container}>
            <div style={{ flexGrow: "1" }}></div>
            <div>
                <button className="btn btn-info" onClick={LogoutHandler}>Sair</button>
            </div>
        </div>
    )
};

export default Bar;