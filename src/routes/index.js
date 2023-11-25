import { createBrowserRouter } from "react-router-dom";
import Browse from "../pages/Browse";
import Layout from "./Layout";
import Login from "../pages/Login";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Login />
            },
            {
                path: '/browse',
                element: <Browse />
            }
        ]
    }
])