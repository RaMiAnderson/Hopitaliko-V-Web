import React from 'react'
import getUser from "../../../services/getUserFonction"
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'


export default function adminDashboard() {
    const navigate = useNavigate();
    const [token, setToken] = useState(sessionStorage.getItem("user"));
    if(token !== null){
        const [userDataSRC, setUserDataSRC] = useState(getUser.getDataUser(token));
        const d = userDataSRC.then(async (data) => await setUserData((data)))
        const [userData, setUserData] = useState();
        
        useEffect(() => {
            if(userData != undefined){
                // ETO ZAOOOOOOOO
                console.log(userData)
            }
        })
    }
    else
        useEffect(() => {navigate("/")})
    


  return (
    <h1>adminDashboard</h1>
  )
}