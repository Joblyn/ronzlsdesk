import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const Unauthorized = React.lazy(() => import('pages/Unauthorized'));

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        rest.role === 'admin' ? (
          <Component {...props} />
        ) : (
          <Unauthorized {...props} />
        )
      }
    />
  );
};

export default ProtectedRoute;
