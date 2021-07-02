import React from 'react'
import {NavLink} from 'react-router-dom'
import {auth} from '../../backend/firebase/firebase.utils'
import ReactTooltip from "react-tooltip";
import './navbar.style.scss';
const navbar = ({currentUser}) => {
    // console.log(currentUser)
    const selected ={
        fontWeight:'bold',
        borderBottom:'4px solid white',
    }
    return (
        <div className='navbar'>
            {/* <div className='header'>
                <NavLink className='navbar-links-link' to = '/home'><img className="navbar-header-logo" src={`${process.env.PUBLIC_URL}/logo_RH.png`} alt="page_logo"></img></NavLink>                
            </div> */}

                <h1>Recipe Hut</h1>            
            <div className='navbar-links'>
                    {/* <NavLink className='navbar-links' data-tip data-for="intro" activeStyle={selected}  to = '/intro'>
                    <i class="fas fa-info navbar-links-link"></i>
                    </NavLink> */}
                <NavLink className='navbar-links' data-tip data-for="home" activeStyle={selected}  to = '/home'>
                    <i className="ri-home-3-line navbar-links-link"></i>
                    </NavLink>
                <NavLink className='navbar-links' data-tip data-for="search" activeStyle={selected}  to = '/search'>
                    <i className="ri-search-line navbar-links-link"></i></NavLink>
                {
                currentUser? 
                <NavLink  activeStyle={selected}  data-tip data-for="profile" className='navbar-links' 
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
                currentUser? 
                <NavLink activeStyle={selected} data-tip data-for="community"  className='navbar-links' to = '/community'><i className="ri-discuss-fill navbar-links-link"></i></NavLink>:null
                }
                {
                    currentUser ? (null):
                (<NavLink  activeStyle={selected} data-tip data-for="signin" className='navbar-links' to = '/signin'> 
                <i className="ri-login-box-line navbar-links-link"></i>
                </NavLink>)
                }

            </div>

            {/* tool tips */}
            <ReactTooltip id="home" place="bottom" effect="solid" >
                home
            </ReactTooltip>
            <ReactTooltip id="search" place="bottom" effect="solid">
                search for recipes
            </ReactTooltip>
            <ReactTooltip id="profile" place="bottom" effect="solid">
                view your profile
            </ReactTooltip>
            <ReactTooltip id="community" place="bottom" effect="solid">
                read and write recipe blogs
            </ReactTooltip>
            <ReactTooltip id="sigin" place="bottom" effect="solid">
               signin to recipe hut
            </ReactTooltip>
        </div>
    )
}
export default navbar
