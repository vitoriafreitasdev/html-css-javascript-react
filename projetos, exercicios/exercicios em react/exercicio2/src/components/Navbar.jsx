import {Link, NavLink} from "react-router-dom"
import "./Navbar.css"
const Navbar = () => {
  return (
    <div>
        {/* <Link to="/">Home</Link>
        <Link to="/contact">Contatos</Link> */}
        <NavLink to="/" className={({isActive}) => (isActive ? "active" : "")}>
              <p>Home</p>
        </NavLink>
        <NavLink to="/contact" className={({isActive}) => (isActive ? "active" : "")}>
              <p>Contatos</p>
        </NavLink>
        <NavLink to="/counter" className={({isActive}) => (isActive ? "active" : "")}>
              <p>Contador</p>
        </NavLink>
    </div>
  )
}

export default Navbar