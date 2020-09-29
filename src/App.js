import React, { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './Layout';
import Dashboard from './Dashboard';
import Category from './Category/Category';
import Login from './Login';
import { Context } from './context/context';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const authContext = useContext(Context);

  const routes = (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/category" exact component={Category} />
      <Redirect to="/" />
    </Switch>
  );

  let content = <Login />;
  if (authContext.isAuth) {
    content =
      <Layout>
        {routes}
      </Layout>;
  };

  return content;
};

export default App;