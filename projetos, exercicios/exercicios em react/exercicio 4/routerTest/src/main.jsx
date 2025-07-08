import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, Route, Navigate } from 'react-router-dom'
import Search from './routes/Search.jsx'
import Product from './routes/Product.jsx'
import Info from './routes/Info.jsx'
import Home from './routes/Home.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [  
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "products/:id",
        element: <Product/>
      },
      {
        path: "products/:id/info",
        element: <Info/>
      },
      {
        path: "search",
        element: <Search/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
