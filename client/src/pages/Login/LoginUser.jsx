import React, {useState,useEffect} from 'react'
import LoginCover from "../../assets/cover/bg.svg"
import { useNavigate } from 'react-router-dom'

//component
import { TextField, Button } from '@mui/material'

//style
import "./Login.css"

import axios from "axios"


let LoginUser = ()=> {
  const [username,setUsername] = useState()
  const [password,setPassword] = useState()

  const submitForm = async (e) => {
    e.preventDefault();
    
    try{
      const res = await axios.post("http://localhost:8011/api/auth/login", {username, password})
    }catch (err)
    {

    }
  
  }
  
  
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
            <form  onSubmit={submitForm}>
              <TextField 
                id='outlined-required'
                label="Nom d'utilisateur"
                defaultValue="" className='textField email' onChange={e=>setUsername(e.target.value)}/>
              <TextField 
                id='outlined-password-input'
                label="Mot de passe"
                type='password'
                autoComplete='current-password'
                className='textField pass'
                onChange={e=>setPassword(e.target.value)}/>
              
              <Button type='submit' className='btnSubmit' variant="Contained">Se Connecter</Button>
            </form>
            
          </div>

        </section>
      </div>
      
    </>
  )
}

export default LoginUser