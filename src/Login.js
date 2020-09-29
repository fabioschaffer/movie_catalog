import React, { useContext } from 'react';
import classes from './Login.module.css';
import { Context } from './context/context';

// import * as firebase from "firebase/app";

// import "firebase/auth";
// import "firebase/database";

function Login() {
    const context = useContext(Context);

    const LoginHandler = (e) => {
        e.preventDefault();

        // var firebaseConfig = {
        //     apiKey: "AIzaSyCJzHkD08OJJDfrGlkFF1Ie6ZPBqaam470",
        //     authDomain: "moviecatalog-3aa25.firebaseapp.com",
        //     databaseURL: "https://moviecatalog-3aa25.firebaseio.com",
        //     projectId: "moviecatalog-3aa25",
        //     storageBucket: "moviecatalog-3aa25.appspot.com",
        //     messagingSenderId: "847945380585",
        //     appId: "1:847945380585:web:401ffa2a74f51e4c213678"
        // };

        // firebase.initializeApp(firebaseConfig);

        // const email = 'test@test.com';
        // const password = '123456';

        // firebase.auth().createUserWithEmailAndPassword(email, password).then(function (user) {
        //     console.log(user);
        // }, function (error) {
        //     console.log(error);
        // });

        // firebase.auth().signInWithEmailAndPassword(email, password).then(function () {
        //     firebase.database().ref('category').set({
        //         description: 'ação 4'
        //     });
        // }, function (error) {
        //     console.log(error);
        // });

        context.login();
    }

    return (
        <form className={classes.Form}>
            <p>
                <label>Login:</label>
                <input></input>
            </p>
            <p>
                <label>Senha:</label>
                <input></input>
            </p>
            <p>
                <button className="btn btn-info" onClick={LoginHandler}>Login</button>
            </p>
        </form>
    )
};

export default Login;