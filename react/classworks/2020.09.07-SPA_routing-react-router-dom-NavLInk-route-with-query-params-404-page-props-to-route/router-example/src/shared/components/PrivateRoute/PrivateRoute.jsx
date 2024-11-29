import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export const ProtectedRoute = ({
  component: Component,
  isAuthenticated,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
              {/* eslint-disable-next-line react/prop-types */}
            from={props.location}
            to={{
              pathname: '/auth/admin/',
            }}
          />
        )
      }
    />
  );
};

ProtectedRoute.propTypes = {
  component: PropTypes.string.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};
