import React from 'react'
import {Link} from 'react-router-dom'
import HomePage from '../../pages/home/homePage'
import ProfilePage from '../../pages/profile/profilePage';
const navbar = () => {
    return (
        <div>
            <h1 className ='navbar-header'>
                Navbar
            </h1>
            <Link className='navbar-links' to = '/home'>Home</Link>
            <Link className='navbar-links' to = '/profile'> Profile</Link>
            <Link className='navbar-links' to = '/community'> Community</Link>
        </div>
    )
}
export default navbar
