import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signup from './pages/signup';
import Signin from './pages/signin';
import Dashboard from './pages/dashboard';
import ProtectedRoute from './ProtectedRoute';
import Notfound from './pages/Notfound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Signup />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/signin',
    element: <Signin />,
  },
  {
    path: '/notfound',
    element: <Notfound />,
  },
  {
    path: '/dashboard',
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: '*',
    element: <Notfound />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
