import React, { useState } from 'react';
import axios from 'axios';

export const Context = React.createContext({
  isAuth: false,
  login: () => { }
});

function ContextProvider(props) {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('token'));

  const loginHandler = (login, email, pwd) => {
    const authData = {
      email: email,
      password: pwd,
      returnSecureToken: true
    };
    let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCJzHkD08OJJDfrGlkFF1Ie6ZPBqaam470';
    if (login) {
      url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyCJzHkD08OJJDfrGlkFF1Ie6ZPBqaam470';
    }
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
        alert(err.response.data.error.message);
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