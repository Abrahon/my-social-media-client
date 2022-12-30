import { createBrowserRouter } from "react-router-dom";
import About from "../../Component/Component/About/About";
import AboutDetails from "../../Component/Component/About/AboutDetails";
import Home from "../../Component/Component/Home/Home";
import Login from "../../Component/Component/Login/Login";
import Media from "../../Component/Component/Media/Media";
import Message from "../../Component/Component/Message/Message";
import SignUp from "../../Component/Component/SignUp/SignUp";
import Main from "../../Layout/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
// import PrivateRoute from "../PrivateRoute/PrivateRoute";


export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<PrivateRoute><Home></Home></PrivateRoute>
            },
            {
                path:'/media',
                element:<Media></Media>
            },
            {
                path:'/message',
                element:<Message></Message>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {    
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/aboutDetails',
                element:<AboutDetails></AboutDetails>
                // loader:({params})=> fetch(`https://social-media-server-chi.vercel.app/statusOptions/${params.id}`)
            }
        ]
       

    }

])