import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Req from './components/Req.jsx';

 
 import {
   createBrowserRouter,
   RouterProvider,
 } from "react-router";

 const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/requisicao",
    element: <Req/>,
  }
]);

 createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)