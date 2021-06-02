import React, { useState } from 'react'
import { auth,signInWithGoogle } from '../../backend/firebase/firebase.utils';
import CustomButton from '../../components/customButton/custom-button.component'
import FormInput from '../../components/form-input/form-input.component';
import './signin.style.scss';
function Signin() {
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")

    const handleChange = (e) =>
    {
        const {value, name} = e.target;
        if (name === "email") setEmail(value)
        if (name === "password") setPassword(value)


    }
    const handleSubmit = async (e)=>
    {
        e.preventDefault();
        try 
        {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: ''});
        }
        catch (error)
        {
            console.log(error)
        }
        setEmail("")
        setPassword("")
    }
    return (
        <div className='sign-in'>
        <h2> I already have an account ! </h2>
        <span> Sign in with  your email and password</span>

        <form onSubmit={handleSubmit}>
        <FormInput
            name='email'
            type='email'
            handleChange={handleChange}
            value={email}
            label='email'
            required
        />
        <FormInput
            name='password'
            type='password'
            value={password}
            handleChange={handleChange}
            label='password'
            required
        />
        <div className = 'buttons'>
        <CustomButton  type='submit'>
                Sign in
        </CustomButton>
        <CustomButton  onClick = {signInWithGoogle} isGoogleSignin>
            Sigin with google
        </CustomButton>
        </div>
        </form>
    </div>  
    )
}

export default Signin
