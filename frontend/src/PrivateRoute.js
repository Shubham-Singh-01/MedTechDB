import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const token = localStorage.getItem('token');
  const sessionToken = localStorage.getItem('sessionToken');
  const isAuthenticated = token && sessionToken;

  return isAuthenticated ? <Outlet /> : <Navigate to="/loginSelect" />;
};

export default PrivateRoute;