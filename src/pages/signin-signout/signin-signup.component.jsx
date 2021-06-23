import React, { useState } from 'react'
import Signin from '../../components/signin/signin.component'
import Signup from '../../components/signup/signup.component'
import './signin-signup.style.scss'
import {Link} from 'react-router-dom'

function SigninSignout() {
    const showSignin = () =>{
        var signinDiv = document.querySelector(".signin-div")
        if(signinDiv) signinDiv.style.display="inline-block"
        var signupDiv = document.querySelector(".signup-div")
        if(signupDiv) signupDiv.style.display="none"
    }
    const showSignup = () =>{
        var signupDiv = document.querySelector(".signup-div")
        if(signupDiv) signupDiv.style.display="inline-block"
        var signinDiv = document.querySelector(".signin-div")
        if(signinDiv) signinDiv.style.display="none"
    }
    
    return (
        <div className='signin-signup'>
            <nav className='signin-signup-nav'>
                <div onClick ={showSignin}>
                Signin
                </div>
                <div onClick = {showSignup}>
                Sign up
                </div>  
            </nav>
            <div className='signin-div'>
                <Signin/>
            </div>
            <div className='signup-div'>
                <Signup/>
            </div>
                
        </div>
    )
}

export default SigninSignout
