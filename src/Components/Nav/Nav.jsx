import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <nav>
            <div className="nav_contenedor">
                <div className="nav_titulo">
                  <h1>Studio Ghibli</h1>
                </div>
                <div className="nav_menu">
                  <Link to="/" className='link'>Inicio</Link> {" "}
                  <Link to="/movies"  className='link'>Movies</Link>
                </div>
            </div>
           
        </nav>
    </div>
  )
}

export default Nav