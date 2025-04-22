import {
    createBrowserRouter,

  } from "react-router-dom";
import Layout from "../MainLayout/Layout";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blog/Blog";
import Application from "../Pages/Application/Application";
import Blog_Deatils from "../Components/Blog_Deatils";
  

  
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
        },
        {
          path:'/blogs/:id',
          element:<Blog_Deatils/>
        }
      ]
    },
  ]);

  export default router