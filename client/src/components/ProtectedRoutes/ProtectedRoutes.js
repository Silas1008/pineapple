import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ auth, element }) => {
  if (auth) {
    return <Route element={element} />;
  } else {
   
    return <Navigate to="/breadcrumbs" />;
  }
};

export default ProtectedRoute;
