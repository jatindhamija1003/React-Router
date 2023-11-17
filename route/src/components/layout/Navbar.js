import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className=''>
                <div className='navbar1'>
                    <ul>
                        <li><NavLink className="nav " aria-current="page" to="/">Home </NavLink></li>
                        <li><NavLink className="nav" exact to="/about" >About </NavLink></li>
                        <li><NavLink className="nav" exact to="/contact">Contact </NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default Navbar
