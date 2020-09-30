import React, { useEffect, useState } from 'react';
import reqAPI from '../component/requestAPI';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [user, setUser] = useState({
    userId: null,
    isLoggedIn: false,
    isRegisteredUser: false,
  });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    reqAPI
      .isLoggedIn()
      .then(setUser)
      .then(() => setLoaded(true));
  }, []);

  if (loaded) {
    return (
      <Route
        {...rest}
        render={(props) =>
          !user.isLoggedIn ? (
            <Redirect to='/login' />
          ) : !user.isRegisteredUser ? (
            <Redirect to='/register' />
          ) : (
            <Component {...props} user={user} />
          )
        }
      ></Route>
    );
  }
  return <p>Loading...</p>;
};

export default PrivateRoute;
