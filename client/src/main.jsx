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
  }
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster />
    < RouterProvider router={route}/>
  </StrictMode>,
)
