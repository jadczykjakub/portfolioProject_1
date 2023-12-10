import React from 'react';
import { Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';

export default function PublicRoutes() {
  return [
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
    { path: '*', element: <Navigate to="/login" replace /> },
  ];
}
