import React, { createContext } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { LoginPage } from './pages/LoginPage'
import { AdminPage } from './pages/AdminPage'
import { AddClient } from './pages/AddClient'
import { ClienteView } from './pages/ClienteView'
import { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export const AuthContext = createContext();

export const Index = () => {

    const [loggedIn, setLoggedIn] = useState(false)

    const [dataUser, setDataUser] = useState({
        id: '',
        name: '',
        surname: '',
        role: ''
    })

    useEffect(() => {
        let token = localStorage.getItem('token')
        if (token) setLoggedIn(true)
    }, [])

    const handleLogout = () => {
        setLoggedIn(false);
        setDataUser({
            id: '',
            name: '',
            surname: '',
            role: ''
        });
    };

    const routes = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            errorElement: <NotFoundPage />,
            children: [
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
            <AuthContext.Provider value={{loggedIn, setLoggedIn, dataUser, setDataUser}}>
                <RouterProvider router={routes} />
            </AuthContext.Provider>
        </>
    )
}
