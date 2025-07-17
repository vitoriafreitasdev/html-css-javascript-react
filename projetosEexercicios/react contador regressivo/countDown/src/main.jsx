import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Home from './routes/Home'
import CountDown from './routes/CountDown'

import { CountdownProvider } from './context/CountdownContext.jsx'
import ShowLocalSaves from './components/ShowLocalSaves.jsx'

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
        path: "/countdown",
        element: <CountDown/>
      },
      {
        path: "/showlocalsaves",
        element: <ShowLocalSaves/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CountdownProvider>
      <RouterProvider router={router}/>
    </CountdownProvider>
  </StrictMode>,
)
