import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './components/pages/Dashboard';
import Modules from './components/pages/Modules';
import Demo from './components/pages/Demo';

const router = createBrowserRouter([
  { path: '/', element: <Demo /> },
  {
    path: '/moduls',
    element: <Modules />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
