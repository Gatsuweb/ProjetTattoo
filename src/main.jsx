import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
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
// import ReservationFlash from './pages/ReservationFlash';


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
      // { path: "/reservation-flash", element: <ReservationFlash /> },    
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <HelmetProvider>
    <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
