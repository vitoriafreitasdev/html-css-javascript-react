
import { Outlet } from 'react-router-dom'
import Footer from './componets/footer'
import Navbar from './componets/navbar'
import {ToastContainer} from 'react-toastify'
import './App.css'
function App() {
  return (
    <div className='container'>
      <ToastContainer/>
      <Navbar/>
      <div>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
