import React from 'react';
import './App.css';
import Welcome from './component/Welcome';
import RegistrationForm from './component/RegistrationForm';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route exact path='/register' component={RegistrationForm} />
        <Route exact path='/gallery' component={Gallery} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
