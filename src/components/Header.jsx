import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
        <div className="container">
            <div className="inner-content">
                <div className="brand">
                    <Link to="/add">Rated M</Link>
                </div>
                <ul className="nav-links">
                    <li>
                        <Link to="/">Por Ver</Link>
                    </li>
                    <li>
                        <Link to="/watched">Favoritas</Link>
                    </li>
                    <li>
                        <Link to="/add" className='btn'>Buscar</Link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
  )
}
