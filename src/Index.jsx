import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { LoginPage } from './pages/LoginPage'
import { AdminPage } from './pages/AdminPage'

export const Index = () => {

    const routes = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            errorElement: <NotFoundPage />,
            children:[
                {
                    path: '/',
                    element: <AdminPage />
                }
            ]
        }
    ])
    return (
        <>
            <RouterProvider router={routes} />
        </>
    )
}
