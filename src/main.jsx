import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.jsx'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
        errorElement: <div>Error</div>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
        ]
    }
])

const root = ReactDOM.createRoot(
    document.getElementById('root')
);

root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);
