import React from 'react'
import getUser from "../../../services/getUserFonction"
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'


//style
import "./DashboardStyle.css"

//navBar
import NavbAdmin from "../../../components/Navbar/AdminNavbar"

export default function adminDashboard() {
    const navigate = useNavigate();

    // Verify if already Connected
    const [token, setToken] = useState(sessionStorage.getItem("user"));
    if(token !== null){
        const [userDataSRC, setUserDataSRC] = useState(getUser.getDataUser(token));
        const d = userDataSRC.then(async (data) => await setUserData((data)))
        const [userData, setUserData] = useState();
        
        useEffect(() => {
            if(userData != undefined){
                if(userData.fonction !== "Admin")
                    navigate("/")
            }
        })
    }
    else
        useEffect(() => {navigate("/")})
    


  if(token !== null)
    return (
        <>
            <div className='adminDashBoardParent'>
                <div className="navParent">
                    <NavbAdmin/>
                </div>
                <div className="contentParent">
                    <h1>adminDashboard</h1>
                </div>
            </div>
        </>
      )
}