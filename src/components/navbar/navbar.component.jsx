import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.style.scss'
const navbar = () => {
    return (
        <div className='navbar'>
            <div className='header'>
                <h1 className ='navbar-header'>
                    Recipe Hut
                </h1>
            </div>
            <div className='navbar-links'>
                <Link className='navbar-links-link' to = '/home'>Home</Link>
                <Link className='navbar-links-link' to = '/search'>Search Recipes</Link>
                <Link className='navbar-links-link' to = '/profile'> Profile</Link>
            </div>
        </div>
    )
}
export default navbar
