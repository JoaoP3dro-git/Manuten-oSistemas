import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ProductsPage } from './pages/ProductsPages.jsx';
import { APIPage } from './pages/APIPage.jsx';
import { MapPage } from './pages/MapPage.jsx';
import { GraphicPage } from './pages/GraphicPage.jsx';
import { Analytics } from "@vercel/analytics/react";

const router = createBrowserRouter([
  {
    path: "/",
    element:
        <ProductsPage/>,
  },
  {
    path: "/api",
    element: 
        <APIPage/>,
  },
  {
    path: "/map",
    element: 
        <MapPage/>,
  },
  {
    path: "/graph",
    element: 
        <GraphicPage/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Analytics />
    <RouterProvider router={router} />
  </>,
)
