import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Appointment from "../pages/Home/Appointment/Appointment";
import Login from "../pages/Home/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Booking from "../pages/Booking/Booking";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'appointment',
            element:<PrivateRoute><Appointment/></PrivateRoute>
        },
        {
            path:'login',
            element:<Login/>
        },
        {
            path:'Register',
            element:<SignUp/>
        },
        {
            path:'booking',
            element:<PrivateRoute><Booking/></PrivateRoute>
        },

      ]
    },
  ]);
  export default router