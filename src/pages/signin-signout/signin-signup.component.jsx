import React, { useState } from 'react'
import Signin from '../../components/signin/signin.component'
import Signup from '../../components/signup/signup.component'
import './signin-signup.style.scss'
import {Link} from 'react-router-dom'
import { useEffect } from 'react'

function SigninSignout() {
    const [timer,setTimer] = useState(1000)
    const openDoor =()=>{
        setTimer(10)
        var door =document.querySelectorAll('.door')
        if (door)
        for(let i =0; i<door.length;i++) door[i].classList.add('animate__zoomOutLeft')
        console.log('door opened')
        var line = document.querySelector('.line')
        if(line)
        line.classList.add('animate__fadeOutLeft')

        var person = document.querySelector('.person')
        if(person)
        person.classList.add('animate__zoomOutLeft')

    }
    const showSignin = () =>{
        openDoor()
        var loginPage = document.querySelector('.login-page-logo')
        if(loginPage) loginPage.style.display = "none"
        var signinDiv = document.querySelector(".signin-div")
        if(signinDiv) 
        {signinDiv.style.display="inline-block"
        signinDiv.classList.add("animate__fadeIn")
        }
        var signupDiv = document.querySelector(".signup-div")
        if(signupDiv) signupDiv.style.display="none"
    }
    const showSignup = () =>{
        openDoor()
        var loginPage = document.querySelector('.login-page-logo')
        if(loginPage) loginPage.style.display = "none"
        var signupDiv = document.querySelector(".signup-div")
        if(signupDiv) {
            signupDiv.style.display="inline-block"
            signupDiv.classList.add("animate__fadeIn")
        }
        var signinDiv = document.querySelector(".signin-div")
        if(signinDiv) signinDiv.style.display="none"
    }
    const showComponent1 =() =>{
        openDoor()
        console.log(timer)
        setTimeout(() => {  showSignin() }, timer);
    }
    const showComponent2 =() =>{
        openDoor()
        console.log(timer)
        setTimeout(() => {  showSignup() }, timer);
    }
    useEffect(()=>{
        setTimer(1000)
    },[])
    return (
        <div className='signin-signup'>
            <div className='login-page'>
            <nav className='signin-signup-nav'>
                <div onClick ={showComponent1} className='animate__animated'>
                <h2>
                    Sign in
                </h2>
                </div>
                <div onClick = {showComponent2}  className='animate__animated'>
                    <h2>
                    Sign up
                    </h2>
                </div>  
            </nav>
            <svg className='login-page-logo' id="b368e7d6-7c4a-408c-9a35-0514749a7e1a" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="869.99994" height="520.13854" viewBox="0 0 869.99994 520.13854">
                <path className='door animate__animated' d="M789.5,708.93073h-365v-374.5c0-79.67773,64.82227-144.5,144.49976-144.5h76.00049c79.67749,0,144.49975,64.82227,144.49975,144.5Z" transform="translate(-165.00003 -189.93073)" fill="#f2f2f2"/>
                <path  className='door animate__animated' d="M713.5,708.93073h-289v-374.5a143.38177,143.38177,0,0,1,27.59571-84.94434c.66381-.90478,1.32592-1.79785,2.00878-2.68115a144.46633,144.46633,0,0,1,30.75415-29.85058c.65967-.48,1.322-.95166,1.99415-1.42334a144.15958,144.15958,0,0,1,31.47216-16.459c.66089-.25049,1.33374-.50146,2.00659-.74219a144.01979,144.01979,0,0,1,31.1084-7.33593c.65772-.08985,1.333-.16016,2.0083-.23047a146.28769,146.28769,0,0,1,31.10547,0c.67334.07031,1.34864.14062,2.01416.23144a143.995,143.995,0,0,1,31.10034,7.335c.6731.24073,1.346.4917,2.00879.74268a143.79947,143.79947,0,0,1,31.10645,16.21582c.67163.46143,1.344.93311,2.00635,1.40478a145.987,145.987,0,0,1,18.38354,15.564,144.305,144.305,0,0,1,12.72437,14.55078c.68066.88037,1.34277,1.77344,2.00537,2.67676A143.38227,143.38227,0,0,1,713.5,334.43073Z" transform="translate(-165.00003 -189.93073)" fill="#ccc"/>
                
                <circle className='door animate__animated' cx="524.99994" cy="335.5" r="16" fill="#8EB75F"/>
                <svg className='person animate__animated'>
                <polygon points="594.599 507.783 582.339 507.783 576.506 460.495 594.601 460.496 594.599 507.783" fill="#ffb8b8"/><path d="M573.58165,504.27982h23.64384a0,0,0,0,1,0,0v14.88687a0,0,0,0,1,0,0H558.69478a0,0,0,0,1,0,0v0a14.88688,14.88688,0,0,1,14.88688-14.88688Z" fill="#2f2e41"/><polygon points="655.599 507.783 643.339 507.783 637.506 460.495 655.601 460.496 655.599 507.783" fill="#ffb8b8"/><path d="M634.58165,504.27982h23.64384a0,0,0,0,1,0,0v14.88687a0,0,0,0,1,0,0H619.69478a0,0,0,0,1,0,0v0a14.88688,14.88688,0,0,1,14.88688-14.88688Z" fill="#2f2e41"/><path d="M698.09758,528.60035a10.74272,10.74272,0,0,1,4.51052-15.84307l41.67577-114.86667L764.791,409.082,717.20624,518.85271a10.80091,10.80091,0,0,1-19.10866,9.74764Z" transform="translate(-165.00003 -189.93073)" fill="#ffb8b8"/><path d="M814.33644,550.1843a10.74269,10.74269,0,0,1-2.89305-16.21659L798.53263,412.4583l23.33776,1.06622L827.23606,533.045a10.80091,10.80091,0,0,1-12.89962,17.13934Z" transform="translate(-165.00003 -189.93073)" fill="#ffb8b8"/><circle cx="612.1058" cy="162.12254" r="24.56103" fill="#ffb8b8"/><path d="M814.17958,522.54937H740.13271l.08911-.57617c.13306-.86133,13.19678-86.439,3.56177-114.436a11.813,11.813,0,0,1,6.06933-14.5835h.00025c13.77173-6.48535,40.20752-14.47119,62.52,4.90918a28.23448,28.23448,0,0,1,9.45947,23.396Z" transform="translate(-165.00003 -189.93073)" fill="#8EB75F"/><path d="M754.35439,448.1812,721.01772,441.418l15.62622-37.02978a13.99723,13.99723,0,0,1,27.10571,6.99755Z" transform="translate(-165.00003 -189.93073)" fill="#8EB75F"/><path d="M797.05043,460.73882l-2.00415-45.94141c-1.51977-8.63623,3.42408-16.80029,11.02735-18.13476,7.60547-1.32959,15.03174,4.66016,16.55835,13.35986l7.533,42.92774Z" transform="translate(-165.00003 -189.93073)" fill="#8EB75F"/><path d="M811.71606,517.04933c11.91455,45.37671,13.21436,103.0694,10,166l-16-2-29-120-16,122-18-1c-5.37744-66.02972-10.61328-122.71527-2-160Z" transform="translate(-165.00003 -189.93073)" fill="#2f2e41"/><path d="M793.2891,371.03474c-4.582,4.88079-13.09131,2.26067-13.68835-4.40717a8.05467,8.05467,0,0,1,.01014-1.55569c.30826-2.95357,2.01461-5.63506,1.60587-8.7536a4.59046,4.59046,0,0,0-.84011-2.14892c-3.65124-4.88933-12.22227,2.18687-15.6682-2.23929-2.113-2.714.3708-6.98713-1.25065-10.02051-2.14006-4.00358-8.47881-2.0286-12.45388-4.22116-4.42275-2.43948-4.15822-9.22524-1.24686-13.35269,3.55052-5.03359,9.77572-7.71951,15.92336-8.10661s12.25292,1.27475,17.99229,3.51145c6.52109,2.54134,12.98768,6.05351,17.00067,11.78753,4.88021,6.97317,5.34986,16.34793,2.90917,24.50174C802.09785,360.98987,797.03077,367.04906,793.2891,371.03474Z" transform="translate(-165.00003 -189.93073)" fill="#2f2e41"/>
                </svg>
                
                <path className='line animate__animated' d="M1004.98163,709.57417h-738.294a1.19069,1.19069,0,0,1,0-2.38137h738.294a1.19069,1.19069,0,0,1,0,2.38137Z" transform="translate(-165.00003 -189.93073)" fill="#3f3d56"/>
               
                <path className='door animate__animated' d="M634,600.43073H504a6.46539,6.46539,0,0,1-6.5-6.41531V303.846a6.46539,6.46539,0,0,1,6.5-6.41531H634a6.46539,6.46539,0,0,1,6.5,6.41531V594.01542A6.46539,6.46539,0,0,1,634,600.43073Z" transform="translate(-165.00003 -189.93073)" fill="#fff"/>
                
                <rect className='door animate__animated' x="332.49994" y="201.38965" width="143" height="2" fill="#ccc"/><rect className='door animate__animated' x="332.99994" y="315.5" width="143" height="2" fill="#ccc"/><rect className='door animate__animated' x="377.49994" y="107.5" width="2" height="304" fill="#ccc"/><rect className='door animate__animated' x="427.49994" y="107.5" width="2" height="304" fill="#ccc"/></svg>
            </div>
            <div className='signin-div animate__animated'>
                <Signin/>
            </div>
            <div className='signup-div animate__animated'>
                <Signup/>
            </div>
                
        </div>
    )
}

export default SigninSignout
