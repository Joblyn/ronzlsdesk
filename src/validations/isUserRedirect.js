import React from 'react';

import { Route, Redirect } from 'react-router-dom';

export const IsUserRedirect = ({role, path, children, ...restProps}) => {
  return (
    <Route { ...restProps} 
      render = {() => {
        if(!role) {
          return children
        } 
        if (role === 'superadmin') {
          return (<Redirect 
            to={{
              pathname: '/superadmin/dashboard'
            }}
          />)
        } else if (role === 'admin') {
          return (<Redirect 
            to={{
              pathname: '/admin/dashboard'
            }}
          />)
        } else if (role === 'user') {
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