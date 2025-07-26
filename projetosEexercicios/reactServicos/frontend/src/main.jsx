import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './routes/Home.jsx'
import Register from './routes/Register.jsx'
import Login from './routes/Login.jsx'
import UserPrivateRoute from './routes/UserPrivateRoute.jsx'
import Provider from './context/Provider.jsx'
import AdminPanel from './routes/AdminPanel.jsx'
import EditService from './routes/EditService.jsx'

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
        path: "/register",
        element: <Register/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/user/:id",
        element: <UserPrivateRoute/>
      },
      {
        path: "/administration",
        element: <AdminPanel/>
      },
      {
        path: "/administration/service/:id",
        element: <EditService/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
        <RouterProvider router={router}/>
    </Provider> 
  </StrictMode>,
)
