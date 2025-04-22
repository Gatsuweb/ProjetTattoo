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
import Event from './pages/Event';
import HautKerano from './pages/events/hauts-de-kerano';
import TatoueuseCarhaix from './pages/tatoueuse-carhaix';


const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Preloader /> },
      { path: "/Home", element: <Home /> },
      { path: "/galerie", element: <Galerie /> },
      { path: "/flash", element: <Flash /> },
      { path: "/contact", element: <Contact /> },
      { path: "/Event", element: <Event /> },
      { path: "/Event/hauts-de-kerano", element: <HautKerano /> },
      { path: "/tatoueuse-carhaix", element: <TatoueuseCarhaix /> },    
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
