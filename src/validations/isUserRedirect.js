import React from 'react';

import { Route, Redirect } from 'react-router-dom';

export const IsUserRedirect = ({role, path, children, ...restProps}) => {
  const token = localStorage.getItem('jwtToken');
  return (
    <Route { ...restProps} 
      render = {() => {
        if(!token) {
          return children
        } 
        if (token && role === 'superadmin') {
          return (<Redirect 
            to={{
              pathname: '/superadmin/dashboard'
            }}
          />)
        } else if (token && role === 'admin') {
          return (<Redirect 
            to={{
              pathname: '/admin/dashboard'
            }}
          />)
        } else if (token && role === 'user') {
          return (<Redirect 
            to={{
              pathname:'/user/dashboard'
            }}
          />)
        }
      }}
    />
  )
}