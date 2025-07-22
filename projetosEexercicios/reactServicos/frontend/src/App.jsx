
import { Outlet } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'

import Navbar from './components/Navbar'
import './App.css'
function App() {

  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default App
