import { createBrowserRouter } from "react-router-dom";
import Browse from "../pages/Browse";
import Login from "../pages/Login";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/browse',
        element: <Browse />
    }
])