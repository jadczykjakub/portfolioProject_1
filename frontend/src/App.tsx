import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';

function App() {
  return (
    <div>
      <h1>hello moto</h1>
      <RouterProvider router={router} />
      {/* <h1>Clothes app</h1>
      <Clothes /> */}
    </div>
  );
}

export default App;
