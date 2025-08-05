import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './routes/Home.jsx'
import Cadastrar from './routes/Cadastrar.jsx'
import Login from './routes/Login.jsx'
import Recipe from './routes/Recipe.jsx'
import CreateRecipes from './routes/CreateRecipes.jsx'
import EditRecipe from './routes/EditRecipe.jsx'
const route = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/cadastrar",
        element: <Cadastrar/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/receita/:id",
        element: <Recipe/>
      },
      {
        path: "/criarreceita/:id",
        element: <CreateRecipes/>
      },
      {
        path: "/editar/:id",
        element: <EditRecipe/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route}/>
  </StrictMode>,
)
