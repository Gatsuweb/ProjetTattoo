import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import './index.css'
import Galerie from './pages/Galerie';
import Contact from './pages/Contact';
import Flash from './pages/Flash';
import Preloader from './components/Preloader';


const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Preloader /> },
      { path: "/Home", element: <Home /> },
      { path: "/galerie", element: <Galerie /> },
      { path: "/flash", element: <Flash /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
