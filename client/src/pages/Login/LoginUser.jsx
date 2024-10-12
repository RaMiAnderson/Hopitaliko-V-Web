import React, {useState,useEffect} from 'react'
import LoginCover from "../../assets/cover/bg.svg"
import { Navigate, useNavigate } from 'react-router-dom'
import getUser from "../../services/getUserFonction"

//component
import { TextField, Button } from '@mui/material'

//style
import "./Login.css"

import axios from "axios"
import {toast} from "react-hot-toast"


let LoginUser = ()=> {
//CONTROLL IF ALREADY CONNECTED
  const navigate = useNavigate();
  /*const [token, setToken] = useState(sessionStorage.getItem("user"));
  if(token !== null){
      const [userDataSRC, setUserDataSRC] = useState(getUser.getDataUser(token));
      const [userData, setUserData] = useState(userDataSRC.then(async (data) => await setUserData((data))));
      // useEffect(() => {
      //   navigate("/"+userData.fonction);
      // })
  }

*/
// SECTION LOGIN
  const [username,setUsername] = useState()
  const [password,setPassword] = useState()

  const submitForm = async (e) => {
    e.preventDefault();
    const emailsLabel = document.querySelector(".emailErr .MuiFormLabel-root")
    const emailInputDiv = document.querySelector(".emailErr .MuiInputBase-root")
    const passLabel = document.querySelector(".passErr .MuiFormLabel-root")
    const passInputDiv = document.querySelector(".passErr .MuiInputBase-root")
    
    try{
      const res = await axios.post("http://localhost:8011/api/auth/login", {username, password});
      emailsLabel.classList.remove("Mui-error")
      emailInputDiv.classList.remove("Mui-error")
      passLabel.classList.remove("Mui-error")
      passInputDiv.classList.remove("Mui-error")

      // ilay token
      const tk = JSON.stringify(res.data.token);

      if(res.data.msg == "Connexion réussi"){
        //save to session : envoi token
        sessionStorage.setItem("user",tk);
        if(res.status == 200 && res.data.user.fonction == "Admin")
          navigate("/admin/dashboard");
      }else{
        //control message 
        let message = JSON.stringify(res.data.msg).split("").map(car => car.replace('"', "")).join("");
        toast.error(message, { duration: 6000});
        //control style
        if(message == "Mot de passe incorrect"){
          passLabel.classList.add("Mui-error")
          passInputDiv.classList.add("Mui-error")
        }
        if(message == "Votre username est introuvable"){
          emailsLabel.classList.add("Mui-error")
          emailInputDiv.classList.add("Mui-error")
        }
        
      }
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
                defaultValue="" className='textField email emailErr' onChange={e=>setUsername(e.target.value)}/>
              <TextField 
                id='outlined-password-input'
                label="Mot de passe"
                type='password'
                autoComplete='current-password'
                className='textField pass passErr'
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