import React from 'react'
import {NavLink} from 'react-router-dom'
import {auth} from '../../backend/firebase/firebase.utils'
import './navbar.style.scss';
const navbar = ({currentUser}) => {
    console.log(currentUser)
    const selected ={
        fontWeight:'bold',
        borderBottom:'2px solid black',
        color:'green'
    }
    return (
        <div className='navbar'>
            {/* <div className='header'>
                <NavLink className='navbar-links-link' to = '/home'><img className="navbar-header-logo" src={`${process.env.PUBLIC_URL}/logo_RH.png`} alt="page_logo"></img></Link>                
            </div> */}
            <div className='navbar-links'>
                <NavLink className='navbar-links' activeStyle={selected}  to = '/home'><i className="ri-home-3-line navbar-links-link"></i></NavLink>
                <NavLink className='navbar-links' activeStyle={selected}  to = '/search'><i className="ri-search-line navbar-links-link"></i></NavLink>
                {
                currentUser? <NavLink  activeStyle={selected} className='navbar-links' 
                to={
                    {
                        pathname:`/profile/user-${currentUser.id}`,
                        state:{
                            fromNavbar:true
                        }
                    }
                }>
                    <i className="ri-user-3-line navbar-links-link"></i></NavLink>:null
                }
                {
                currentUser? <NavLink activeStyle={selected}  className='navbar-links' to = '/community'><i className="ri-discuss-fill navbar-links-link"></i></NavLink>:null
                }
                {
                    currentUser ? (null):
                (<NavLink  activeStyle={selected} className='navbar-links' to = '/signin'> 
                <i className="ri-login-box-line"></i>
                </NavLink>)
                }

            </div>
        </div>
    )
}
export default navbar
