import {NavLink} from "react-router-dom"

import './Navbar.css'
const Navbar = () => {
  return (
      <nav className="nav-container">
        <h2>Car Services</h2>
          <div>
            <p><NavLink to="/" className="links">Home</NavLink></p>
            <p><NavLink to="/register" className="links">Cadastrar</NavLink></p>
            <p><NavLink to="/login" className="links">Login</NavLink></p>
          </div>
      </nav>
  )
}

export default Navbar