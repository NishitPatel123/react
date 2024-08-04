import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                           <Link className="nav-link" to="/signup">SignUp</Link>
                        </li>
                        <li className="nav-item active">
                           <Link className="nav-link" to="/home">home</Link>
                        </li>
                        <li className="nav-item active">
                           <Link className="nav-link" to="/usestatedemo">UseStateDemo</Link>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
