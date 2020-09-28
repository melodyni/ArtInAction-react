import React from 'react';
import Welcome from '../component/Welcome';
import Gallery from '../component/Gallery';
import ZoomedImage from '../component/ZoomedImage';
import RegistrationForm from '../component/RegistrationForm';
import AddArtForm from '../component/AddArtForm';
import PrivateRoute from '../Routes/PrivateRoutes';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/login' component={Welcome} />
        <Route exact path='/register' component={RegistrationForm} />
        <Route exact path='/addArt' component={AddArtForm} />
        <PrivateRoute exact path='/' component={Gallery} />
        <PrivateRoute exact path='/gallery/:category' component={Gallery} />
        <Route exact path='/image/:name/:title' component={ZoomedImage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
