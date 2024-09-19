import React from 'react'
import LoginCover from "../../assets/cover/bg.svg"

//component
import { TextField, Button } from '@mui/material'

//ico
import GoogleIcon from '../../assets/ico/icons8-google.svg'
import FacebookIcon from '../../assets/ico/icons8-facebook.svg'
//style
import "./Login.css"


let LoginUser = ()=> {
  
  
  return (
    <>
      <div className='loginParent'>
        <section className="cover"> 
          <img src={LoginCover}  alt='Cover'/>
        </section>
        <section className='sectionForm'>

          <div className='salutation'>
            <h2>Welcome Back to SSC !</h2>
            <p>Lets get you Logged in</p>
          </div>

          <div className='divForm'>
            <form action="#">
              <TextField 
              
                id='outlined-required'
                label="Email"
                defaultValue="" className='textField emailErr' />
              <TextField 
                id='outlined-password-input'
                label="Password"
                type='password'
                autoComplete='current-password'
                className='textField passErr' />
              
              
            </form>
            <a href=""><Button className='btnOtherLog' variant="Contained">Autre methode de connexion</Button></a>
            
            <div className='forgotPasswSection'>
              <Button className='otherLogBtn' variant='outlined'><img src={GoogleIcon} alt="" />Continuer avec Google</Button>
              <Button className='otherLogBtn' variant='outlined' ><img  src={FacebookIcon} alt="" />Continuer avec Facebook</Button>
            </div>
          </div>

        </section>
      </div>
      
    </>
  )
}

export default LoginUser