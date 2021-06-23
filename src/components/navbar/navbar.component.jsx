import React from 'react'
import {Link} from 'react-router-dom'
import {auth} from '../../backend/firebase/firebase.utils'
import './navbar.style.scss'
const navbar = ({currentUser}) => {
    return (
        <div className='navbar'>
            <div className='header'>
                <Link className='navbar-links-link' to = '/home'><img class="navbar-header-logo" src={`${process.env.PUBLIC_URL}/logo_RH.png`} alt="page_logo"></img></Link>                
            </div>
            <div className='navbar-links'>
                <Link className='navbar-links-link' to = '/home'><i class="ri-home-3-line navbar-links-link"></i></Link>
                <Link className='navbar-links-link' to = '/search'><i class="ri-search-line navbar-links-link"></i></Link>
                {
                currentUser? <Link className='navbar-links-link' to = '/profile'><i class="ri-user-3-line navbar-links-link"></i></Link>:null
                }
                {
                currentUser? <Link className='navbar-links-link' to = '/community'><i class="ri-discuss-fill navbar-links-link"></i></Link>:null
                }
                {
                    currentUser ? (null):
                (<Link className='navbar-links-link' to = '/signin'> 
                <i class="ri-login-box-line"></i>
                </Link>)
                }

            </div>
        </div>
    )
}
export default navbar
