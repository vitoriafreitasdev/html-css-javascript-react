import {Link} from "react-router-dom"
import "./Navbar.css"
const Navbar = () => {
  return (
    <nav className="navbar">
        <h2>
            <Link to="/">Receitas</Link>
        </h2>
        <div>
            <p><Link to="/cadastrar">cadastrar</Link></p>
            <p><Link to="/login">login</Link></p>
        </div>
    </nav>
  )
}

export default Navbar