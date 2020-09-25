import React, { useEffect, useState } from 'react';
import reqAPI from '../component/requestAPI';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [user, setUser] = useState({ userId: null, isLoggedIn: false });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    reqAPI
      .isLoggedIn()
      .then(setUser)
      .then(() => setLoaded(true));
  }, [user]);

  if (loaded) {
    return (
      <Route
        {...rest}
        render={(props) =>
          user.isLoggedIn ? (
            <Component {...props} user={user} />
          ) : (
            <Redirect to='/login' />
          )
        }
      ></Route>
    );
  }
  return <p>Loading...</p>;
};

export default PrivateRoute;
