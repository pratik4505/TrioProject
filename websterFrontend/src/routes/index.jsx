import {
    createBrowserRouter,
  } from "react-router-dom";
import Login from "../pages/login";
import Jobs from "../pages/Jobs";
import Requests from "../pages/Requests";
import Notifications from "../pages/Notifications";
import Profile from "../pages/Profile";
import Message from "../pages/Message";
import Register from "../pages/Register";
import Home from "../pages/Home";
export const router = createBrowserRouter([
    {
       path: "/",
      element: <Home />,
    },
    {
      path: "/Register",
      element: <Register />,
    },
    {
      path: "/Login",
      element: <Login />,
    },
    {
      path: "/Jobs",
      element: <Jobs />,
    },
    {
      path: "/Requests",
      element: <Requests />,
    },
    {
      path: "/Profile",
      element: <Profile />,
    },
    {
      path: "/Notifications",
      element: <Notifications />,
    },
    {
      path: "/Message",
      element: <Message />,
    },
    
  ]);