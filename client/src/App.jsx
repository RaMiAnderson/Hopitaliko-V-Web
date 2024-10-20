import React  from 'react'

// Page 
import LoginUser from "./pages/Login/LoginUser.jsx"
import AdminnDashboard from "./pages/admin/DashBoard/adminDashboard.jsx"
import AdminArticles from "./pages/admin/Articles/adminArticles.jsx"
import AdminClientP from "./pages/admin/ClientP/adminClientP.jsx"
import AdminDepense from "./pages/admin/Depenses/adminDepense.jsx"
import AdminFournsseur from "./pages/admin/Fournisseur/adminFourniss.jsx"
import AdminInventory from "./pages/admin/Inventaire/adminIventory.jsx"
import AdminRavitaill from "./pages/admin/Ravitaillement/adminRavitaillement.jsx"
import AdminU_Manage from "./pages/admin/Utilisateurs/adminUserManage.jsx"

// Style
import './App.css'


const LoginPage = () => {
  return <LoginUser/>
}

const AdminDashboard = () => {
  return <AdminnDashboard/>
}

const AdminArtclPg = () => {
  return <AdminArticles/>
}

const AdminClntPg = () => {
  return <AdminClientP/>
}

const AdminDepensePg = () => {
  return <AdminDepense/>
}

const AdminFournssPg = () => {
  return <AdminFournsseur/>
}

const AdminInvtryPg = () => {
  return <AdminInventory/>
}

const AdminRavtaillPg = () => {
  return <AdminRavitaill/>
}

const AdminU_M_Pg = () => {
  return <AdminU_Manage/>
}


export default {
  LoginPage,
  AdminDashboard,
  AdminArtclPg,
  AdminClntPg,
  AdminDepensePg,
  AdminFournssPg,
  AdminInvtryPg,
  AdminRavtaillPg,
  AdminU_M_Pg
}