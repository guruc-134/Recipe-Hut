import React, {useState} from 'react'
import CustomButton from '../../components/customButton/custom-button.component'
import FormInput from '../../components/form-input/form-input.component';
import './signup.style.scss'
function Signup() {
    const [confirmPassword, setConfirmPassword] = useState("")
    const [displayName, setDisplayName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const handleChange = (e) =>
    {
        const {name, value} = e.target;
        if (name === 'displayName') setDisplayName(value)
        if (name === 'email') setEmail(value)
        if (name === 'password') setPassword(value)
        if (name === 'confirmPassword') setConfirmPassword(value)
    }

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        console.log('signup form submitted')
    }
    
    return (
        <div className='sign-up'>
        <h2 className='title'>I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={handleChange}
            label='Display Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={handleChange}
            label='Confirm Password'
            required
          />
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </div>
    )
}

export default Signup
