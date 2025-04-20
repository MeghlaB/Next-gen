import {
    createBrowserRouter,

  } from "react-router-dom";
import Layout from "../MainLayout/Layout";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blog/Blog";
import Application from "../Pages/Application/Application";
  

  
const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/blog',
            element:<Blog/>
        },
        {
            path:'/application',
            element:<Application/>
        }
      ]
    },
  ]);

  export default router