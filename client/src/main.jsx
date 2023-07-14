import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home.jsx'
import UserDetails from './Pages/UserDetails.jsx'
import CreateUser from './Pages/CreateUser.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/user/:id',
        element:<UserDetails></UserDetails>
      },
      {
        path:'/update/:id',
        element:<CreateUser></CreateUser>
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
