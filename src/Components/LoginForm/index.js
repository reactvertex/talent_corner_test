import React, { useEffect, useState } from 'react';
import InputBox from '../InputBox';
import LoginButton from '../Button';
import {LoginFormComponent} from './styleComponent';
import { useNavigate } from "react-router-dom";


function LoginForm () {
    const [fornmDetails , setFormDetails] = useState({
        email : '',
        password : ''
    })
    useEffect(() =>{
        localStorage.clear()
    },[])

      const handleChange = (e) =>{
        setFormDetails({...fornmDetails , [e.target.name] : e.target.value})
    }

    const navigate = useNavigate()
    const formHandler = (event) =>{
        event.preventDefault();
        localStorage.setItem('email', fornmDetails.email)
        navigate('/')
    }
 

    return(
     <LoginFormComponent>
         <div className='text-center loginHeader'> Have an Account?</div>
        <form onSubmit={formHandler} className='d-flex justify-content-center flex-column w-100'>
         <InputBox 
          name='email'
          type='email'
          InputBoxClassName='emailbox' 
          handleChange={handleChange}
          placeHolder='Enter Email' 
         />
        <InputBox 
          name='password'
          type='password'
          InputBoxClassName='emailbox' 
          handleChange={handleChange}
          placeHolder='Enter Password' 
         />
        <LoginButton
          calsses='loginButton'
          buttonText='Login'
         />
        </form>
     </LoginFormComponent>
    )
}
export default LoginForm;