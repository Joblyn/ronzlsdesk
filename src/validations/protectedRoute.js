import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('jwtToken');

  return isAuthenticated ? children : <Redirect to={{ pathname: '/' }} />;
};

