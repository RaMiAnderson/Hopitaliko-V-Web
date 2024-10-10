import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

//route ImportDep
import {createBrowserRouter, RouterProvider, Route, Navigate} from 'react-router-dom';



//Routes
const route = createBrowserRouter([
  {
    path: "/auth/login",
    element : < App/>
  }, 
  {
    path: "/",
    element : < Navigate to="/auth/login" replace/> 
  }
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    < RouterProvider router={route}/>
  </StrictMode>,
)
