

import './App.css'
import { Outlet } from 'react-router-dom'
import { SearchForm } from './components/SearchForm'
import Navbar from './components/Navbar'

function App() {
  
  return (
    <div>
      <Navbar/>
      <SearchForm/>
      <Outlet/>
    </div>
  )
}

export default App
