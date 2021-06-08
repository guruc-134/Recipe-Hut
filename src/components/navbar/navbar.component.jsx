import React from 'react'
import {Link} from 'react-router-dom'
import {auth} from '../../backend/firebase/firebase.utils'
import './navbar.style.scss'
const navbar = ({currentUser}) => {
    return (
        <div className='navbar'>
            <div className='header'>
                <h1 className ='navbar-header'>
                    Recipe Hut
                    {/* <img src='../../assets/logo_RH.png'></img> */}
                </h1>
            </div>
            <div className='navbar-links'>
                <Link className='navbar-links-link' to = '/home'>Home</Link>
                <Link className='navbar-links-link' to = '/search'>Search Recipes</Link>
                {

                   currentUser? <Link className='navbar-links-link' to = '/profile'> Profile</Link>:null
                }
                {
                    currentUser ? (<span className='navbar-links-link' onClick= {()=> auth.signOut()}> Sign out</span>):
                (<Link className='navbar-links-link' to = '/signin'> 
                Sign in
                </Link>)
                }

            </div>
        </div>
    )
}
export default navbar
