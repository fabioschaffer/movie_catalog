import React, { useContext, useState } from 'react';
import classes from './Login.module.css';
import { Context } from './context/context';

function Login() {
    const context = useContext(Context);
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');

    const NewUserHandler = (e) => {
        e.preventDefault();
        context.login(false, email, pwd);
    }

    const LoginHandler = (e) => {
        e.preventDefault();
        context.login(true, email, pwd);
    }

    return (
        <form className={classes.Form}>
            <p>
                <label>Login:</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}></input>
            </p>
            <p>
                <label>Senha:</label>
                <input type="password" value={pwd} onChange={(e) => setPwd(e.target.value)}></input>
            </p>
            <p>
                <button className="btn btn-info" onClick={LoginHandler}>Entrar</button>{' ou '}
                <button className="btn btn-info" onClick={NewUserHandler}>Cadastre-se</button>
            </p>
        </form>
    )
};

export default Login;