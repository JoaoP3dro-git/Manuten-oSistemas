import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ProductsPage } from './pages/ProductsPages.jsx';
import { APIPage } from './pages/APIPage.jsx';
import { MapPage } from './pages/MapPage.jsx';
import { GraphicPage } from './pages/GraphicPage.jsx';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/react"

const router = createBrowserRouter([
  {
    path: "/",
    element: 
      <App>
        <ProductsPage/>
      </App>,
  },
  {
    path: "/api",
    element: 
      <App>
        <APIPage/>
      </App>,
  },
  {
    path: "/map",
    element: 
      <App>
        <MapPage/>
      </App>,
  },
  {
    path: "/graph",
    element: 
      <App>
        <GraphicPage/>
      </App>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Analytics />
    <SpeedInsights/>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
