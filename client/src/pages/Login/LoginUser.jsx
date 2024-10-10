import React, {useState,useEffect} from 'react'
import LoginCover from "../../assets/cover/bg.svg"

//component
import { TextField, Button } from '@mui/material'

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
            <h2 className='TitleLogin'>Hotel'iko</h2>
            <p>Veuillez vous connecter s'il vous plaît!</p>
          </div>

          <div className='divForm'>
            <form method='POST' action="http://localhost:8011/auth/login">
              <TextField 
                id='outlined-required'
                label="Email"
                defaultValue="" className='textField emailErr' name='email'/>
              <TextField 
                id='outlined-password-input'
                label="Password"
                type='password'
                autoComplete='current-password'
                className='textField passErr' name='password' />
              
              <Button type='submit' className='btnSubmit' variant="Contained">Se Connecter</Button>
            </form>
            
          </div>

        </section>
      </div>
      
    </>
  )
}

export default LoginUser