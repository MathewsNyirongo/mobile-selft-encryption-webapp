import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from './LoginPage';
import Dashboard from './Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/user/:id/dashboard" exact>
          <Dashboard userId={window.location.pathname.split("/")[2]} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
