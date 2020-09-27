import React, { useState } from 'react';
import axios from 'axios';
// import * as firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/database";

export const Context = React.createContext({
  isAuth: false,
  login: () => { }
});

function ContextProvider(props) {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('token'));

  const loginHandler = () => {

    // var firebaseConfig = {
    //   apiKey: "AIzaSyCJzHkD08OJJDfrGlkFF1Ie6ZPBqaam470",
    //   authDomain: "moviecatalog-3aa25.firebaseapp.com",
    //   databaseURL: "https://moviecatalog-3aa25.firebaseio.com",
    //   projectId: "moviecatalog-3aa25",
    //   storageBucket: "moviecatalog-3aa25.appspot.com",
    //   messagingSenderId: "847945380585",
    //   appId: "1:847945380585:web:401ffa2a74f51e4c213678"
    // };

    // firebase.initializeApp(firebaseConfig);

    const email = 'test3@test.com';
    const password = '123456';

    // firebase.auth().signInWithEmailAndPassword(email, password).then(function () {
    //   // firebase.database().ref('category').set({
    //   //   description: 'ação 4'
    //   // });
    // }, function (error) {
    //   alert(error);
    // });

    // firebase.auth().createUserWithEmailAndPassword(email, password).then(function (user) {
    //   console.log(user);
    // }, function (error) {
    //   console.log(error);
    // });


    const authData = {
      email: email,
      password: password,
      returnSecureToken: true
    };
    let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCJzHkD08OJJDfrGlkFF1Ie6ZPBqaam470';
    //if (!isSignup) {
      url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyCJzHkD08OJJDfrGlkFF1Ie6ZPBqaam470';
    //}
    axios.post(url, authData)
      .then(response => {
        const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
        localStorage.setItem('token', response.data.idToken);
        localStorage.setItem('expirationDate', expirationDate);
        localStorage.setItem('userId', response.data.localId);
        localStorage.setItem('expiresIn', response.data.expiresIn);
        setIsAuthenticated(true);
      })
      .catch(err => {
        alert(err.response.data.error);
      });

  };

  const logoutHandler = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
    setIsAuthenticated(false);
  };

  return (
    <Context.Provider
      value={{
        login: loginHandler,
        logout: logoutHandler,
        isAuth: isAuthenticated
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;