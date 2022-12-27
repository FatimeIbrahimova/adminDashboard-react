import React from 'react'
import AdminRoot from '../pages/Admin/AdminRoot'
import Dashboard from '../pages/Admin/Dashboard'
import Products from '../pages/Admin/Products'
import HomePage from '../pages/Main/HomePage'
import MainRoot from '../pages/Main/MainRoot'




export const ROUTES=[
    {
     path:"/",
     element:<MainRoot/>,
     children:[
        {
            path:"",
            element:<HomePage/>
        }
     ]
    },
    {
      path:"/admin/",
      element:<AdminRoot/>,
      children:[
        {
            path:"",
            element:<Dashboard/>
        },
        {
            path:"products",
            element:<Products/>
        }
      ]
    }
]