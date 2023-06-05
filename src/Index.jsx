import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { LoginPage } from './pages/LoginPage'
import { AdminPage } from './pages/AdminPage'
import { AddClient } from './pages/AddClient'
import { ClienteView } from './pages/ClienteView'

export const Index = () => {

    const routes = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            errorElement: <NotFoundPage />,
            children:[
                {
                    path: '/',
                    element: <LoginPage />
                },
                {
                    path: '/create',
                    element: <AddClient />
                },
                {
                    path: '/clients',
                    element: <ClienteView />
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
