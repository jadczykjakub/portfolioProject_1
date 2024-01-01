import React from 'react';
import Error from '../pages/Error';
import Clothes from '../pages/Clothes';

export default function PrivateRoutes() {
  return [
    {
      path: '/clothes',
      element: <Clothes />,
      errorElement: <Error />,
    },
    {
      path: 'elo',
      element: <div>Hello world22!</div>,
    },
  ];
}
