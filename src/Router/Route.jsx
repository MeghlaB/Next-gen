import { createBrowserRouter } from "react-router-dom";
import Layout from "../MainLayout/Layout";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blog/Blog";
import Application from "../Pages/Application/Application";
import Blog_Deatils from "../Components/Blog_Deatils";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register.jsx/Register";
import Privetroutes from "./Privetroutes";
import Dashboard from "../Dashboard/Dashboard";
import AdminHome from "../Dashboard/Admin/AdminHome";
import AllUsers from "../Dashboard/Admin/Alluser";
import AddBlogFrom from "../Dashboard/Admin/Addblog";
import BlogManagement from "../Dashboard/Admin/BlogManagement";
import ApplicationData from "../Dashboard/Admin/ApplicationData";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/application",
        element: <Application />,
      },
      {
        path: "/blogs/:id",
        element: <Blog_Deatils />,
      },
    ],
  },
  {
    path:'/dashboard',
    element:<Privetroutes><Dashboard/></Privetroutes>,
    children:[
      {
        path:'',
        
        element:<AdminHome/>
      },
      {
        path:'alluser',
        element:<AllUsers/>
      },
      {
        path:'add-blog',
        element:<AddBlogFrom/>
      },
      {
        path:"blog-management",
        element:<BlogManagement/>
      },
      {
        path:'application',
        element:<ApplicationData/>
      }

     
    ]
  }
]);

export default router;
