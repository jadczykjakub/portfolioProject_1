import React from 'react';
import { Navigate } from 'react-router-dom';
import Login from '../Components/Login';

export default function PublicRoutes() {
  return [
    { path: '/login', element: <Login /> },
    { path: '*', element: <Navigate to="/login" replace /> },
  ];
}
