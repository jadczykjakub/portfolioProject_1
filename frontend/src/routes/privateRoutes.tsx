import React from 'react';
import Error from '../pages/Error';

export default function PrivateRoutes() {
  return [
    {
      path: '/',
      element: <div>Hello world!</div>,
      errorElement: <Error />,
    },
    {
      path: 'elo',
      element: <div>Hello world22!</div>,
    },
  ];
}
