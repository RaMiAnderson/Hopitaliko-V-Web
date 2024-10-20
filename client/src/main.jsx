import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

//route ImportDep
import {createBrowserRouter, RouterProvider, Route, Navigate} from 'react-router-dom';
import { Toaster } from "react-hot-toast";



//Routes
const route = createBrowserRouter([
  {
    path: "/auth/login",
    element : < App.LoginPage/>
  }, 
  {
    path: "/",
    element : < Navigate to="/auth/login" replace/> 
  },
  {
    path: "/auth",
    element : < Navigate to="/auth/login" replace/> 
  },
  {
    path: "/admin/dashboard",
    element : <App.AdminDashboard/>
  },
  {
    path: "/admin",
    element : < Navigate to="/admin/dashboard" replace/>
  },
  {
    path: "/admin/articles",
    element: <App.AdminArtclPg/>
  },
  {
    path: "/admin/fournisseurs",
    element: <App.AdminFournssPg/>
  },
  {
    path: "/admin/clients",
    element: <App.AdminClntPg/>
  },
  {
    path: "/admin/inventaires",
    element: <App.AdminInvtryPg/>
  },
  {
    path: "/admin/ravitaillements",
    element: <App.AdminRavtaillPg/>
  },
  {
    path: "/admin/depenses",
    element: <App.AdminDepensePg/>
  },
  {
    path: "/admin/utilisateurs",
    element: <App.AdminU_M_Pg/>
  }
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster />
    < RouterProvider router={route}/>
  </StrictMode>,
)
