import React from 'react'
import getUser from "../../../services/getUserFonction"
import { useState } from 'react';


export default function adminDashboard() {
    const [token, setToken] = useState(sessionStorage.getItem("user"));
    const [userDataSRC, setUserDataSRC] = useState(getUser.getDataUser(token));
    const [userData, setUserData] = useState(userDataSRC.then(async (data) => await setUserData((data))));

    console.log(userData)
  return (
    <h1>adminDashboard</h1>
  )
}