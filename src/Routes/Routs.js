import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import LoginUser from "../Login/LoginUser";
import Blog from "../Pages/Blog/Blog";
import CourseDetails from "../Pages/Courses/CourseDetails";
import Courses from "../Pages/Courses/Courses";
import Home from "../Pages/Home/Home/Home";
import SignUp from "../SignUp/SignUp";
import PrivatesRoute from "./PrivateRoute";

export const router= createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/courses',
                element:<CourseDetails></CourseDetails>
            },
            {
                path:'/courses/:id',
                element:<CourseDetails></CourseDetails>,
                loader:({params}) =>fetch(`https://e-learning-server-psi.vercel.app/courses/${params.id}`)
            },
            {
                path:"/loginUser",
                element:<LoginUser></LoginUser>
            },
            {
                path:"/signup",
                element:<SignUp></SignUp>
            },

        ]
    }
])

export default router;