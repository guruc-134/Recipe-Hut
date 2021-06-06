import React, {useState} from 'react'
import CustomButton from '../../components/customButton/custom-button.component'
import FormInput from '../../components/form-input/form-input.component';
import {auth, createUserProfileDocument} from '../../backend/firebase/firebase.utils'
import './signup.style.scss'
function Signup() {
  const [errorMessage, setErrorMessage] = useState("")
    const [userDetails,setUserDetails] = useState(
      {
        displayName:'',
        email:'',
        password:'',
        confirmPassword:''
      }
    )

    const handleChange = (e) =>
    {
        const {name, value} = e.target;
        setUserDetails((previous) => ({...previous,[name]:value}));
    }

    const handleSubmit = async (e) =>
    {
        e.preventDefault();
        // console.log('signup form submitted')
        const {displayName,email,password,confirmPassword} = userDetails
        if ( password !== confirmPassword) {
          alert('passwords do not match')
        return}

      try 
      { 
        const {user} =  await auth.createUserWithEmailAndPassword(email, password)
        await createUserProfileDocument(user, {displayName});
        setUserDetails({
          displayName:'',
          email:'',
          password:'',
          confirmPassword:''
        })
      }
        catch (error) 
       {
         console.log(error)
         setErrorMessage(error.message)
       }
    }
    
    const {displayName,email,password,confirmPassword} = userDetails
    return (
      <div className='sign-up'>
        <h1>welcome {displayName}</h1>
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
        <p className='error-message'> {errorMessage} </p>
      </div>
    )
}

export default Signup
