/* eslint-disable no-unused-vars */
import {NavLink} from "react-router-dom"
import { useState, useContext } from 'react'
import ServiceContext from '../context/ServiceContext'
import './Navbar.css'
const Navbar = () => {
  const {isLogged, setLogged} = useContext(ServiceContext)
  const logOut = () => {
    localStorage.removeItem("token")
    setLogged(false)
  }
  return (
      <nav className="nav-container">
        <h2>Car Services</h2>
          <div className="links-container">
            <p><NavLink to="/" className="links">Home</NavLink></p>
            <p><NavLink to="/register" className="links" onClick={logOut}>Cadastrar</NavLink></p>
            {isLogged ? <p><NavLink to="/" className="links" onClick={logOut}>Sair</NavLink></p> : <p><NavLink to="/login" className="links">Login</NavLink></p>}
            
          </div>
      </nav>
  )
}

export default Navbar