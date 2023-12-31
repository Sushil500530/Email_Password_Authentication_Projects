import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Root from './components/Root';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Resister from './components/Resister/Resister';
import HeroResister from './components/HeroResister/HeroResister';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/resister',
        element:<Resister></Resister>
      },
      {
        path:'/heroResister',
        element:<HeroResister></HeroResister>
      }
    ]
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
