import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component }) => {
  // const Component = this.props.Component;
  const isAuthenticated = localStorage.getItem('jwtToken');

  return isAuthenticated ? <Component /> : <Redirect to={{ pathname: '/' }} />;
};

export default ProtectedRoute;
