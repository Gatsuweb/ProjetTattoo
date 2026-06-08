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
import LocalSeoPage from './pages/LocalSeoPage';
// import ReservationFlash from './pages/ReservationFlash';


const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Preloader /> },
      { path: "/home", element: <Home /> },
      { path: "/galerie", element: <Galerie /> },
      { path: "/flash", element: <Flash /> },
      { path: "/contact", element: <Contact /> },
      { path: "/event", element: <Event /> },
      { path: "/event/hauts-de-kerano", element: <HautKerano /> },
      { path: "/tatoueuse-plevin", element: <LocalSeoPage slug="tatoueuse-plevin" /> },
      { path: "/tatoueuse-carhaix", element: <LocalSeoPage slug="tatoueuse-carhaix" /> },
      { path: "/tatoueuse-rostrenen", element: <LocalSeoPage slug="tatoueuse-rostrenen" /> },
      { path: "/tatoueuse-gourin", element: <LocalSeoPage slug="tatoueuse-gourin" /> },
      { path: "/tatoueuse-callac", element: <LocalSeoPage slug="tatoueuse-callac" /> },
      { path: "/tatoueuse-huelgoat", element: <LocalSeoPage slug="tatoueuse-huelgoat" /> },
      { path: "/tatoueuse-mael-carhaix", element: <LocalSeoPage slug="tatoueuse-mael-carhaix" /> },
      { path: "/tatoueuse-plouguernevel", element: <LocalSeoPage slug="tatoueuse-plouguernevel" /> },
      { path: "/tatoueuse-chateauneuf-du-faou", element: <LocalSeoPage slug="tatoueuse-chateauneuf-du-faou" /> },
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
