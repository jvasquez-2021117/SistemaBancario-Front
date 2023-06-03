import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'

export const Index = () => {

    const routes = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            errorElement: <NotFoundPage />,
            children:[
                {
                    path: '/',
                    element: <HomePage />
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
