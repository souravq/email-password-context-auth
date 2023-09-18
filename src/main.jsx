import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import Home from './components/Home.jsx'
import AuthContextApp from './AuthContextApp.jsx'
import Order from './components/Order.jsx'
import PrivateRoute from './routes/PrivateRoute.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/order",
        element:<PrivateRoute><Order/></PrivateRoute>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/register",
        element:<Register/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextApp>
      <RouterProvider router={router}></RouterProvider>
    </AuthContextApp>
  </React.StrictMode>,
)
