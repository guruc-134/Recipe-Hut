import React from 'react'
import Signin from '../../components/signin/signin.component'
import Signup from '../../components/signup/signup.component'
import './signin-signup.style.scss'
function SigninSignout() {
    return (
        <div className='signin-signup'>
            <Signin/>
            <Signup/>
        </div>
    )
}

export default SigninSignout
