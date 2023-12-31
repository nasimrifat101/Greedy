import { createBrowserRouter } from "react-router-dom";
import { Home, Login, Main, Register } from "../Pages/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Register />
            }
        ]
    },
]);