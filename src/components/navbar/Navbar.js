import React from 'react'
import './navbar.styles.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <div className='nav-items'>
                <Link to='/'>
                    <span>Color-Picker</span>
                </Link>
                <Link to='/photos'>
                    <span>Photos</span>
                </Link>
                <Link to='/number'>
                    <span>Number</span>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar