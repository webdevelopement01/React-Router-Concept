import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import Contact from './Components/Contact.jsx';
import Users from './Components/Users.jsx';


const router = new createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path:'/about',
        element: <About></About>
      },
      {
        path:'/contact',
        element: <Contact></Contact>
      },
      {
        path: '/users',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      }
      
    ]
    
  }
  

])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
