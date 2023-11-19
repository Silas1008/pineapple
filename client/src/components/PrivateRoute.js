
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element, auth, redirectPath = '/breadcrumbs' }) => {
  return auth ? element : <Navigate to={redirectPath} />;
};

export default PrivateRoute;
