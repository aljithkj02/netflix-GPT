import { createBrowserRouter } from "react-router-dom";
import Browse from "../pages/Browse";
import Layout from "./Layout";
import Login from "../pages/Login";
import GptSearch from "../pages/GptSearch";


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
            },
            {
                path: '/search',
                element: <GptSearch />
            }
        ]
    }
])