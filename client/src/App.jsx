import React  from 'react'

// Page 
import LoginUser from "./pages/Login/LoginUser.jsx"
import AdminnDashboard from "./pages/admin/DashBoard/adminDashboard.jsx"

// Style
import './App.css'


const LoginPage = () => {
  return <LoginUser/>
}

const AdminDashboard = () => {
  return (
    <AdminnDashboard/>
  )
}


export default {
  LoginPage,
  AdminDashboard
}