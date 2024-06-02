import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/Landing/App.jsx'
import CVApp from './components/CV/CVApp.jsx';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "CVApp",
    element: <CVApp></CVApp>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
