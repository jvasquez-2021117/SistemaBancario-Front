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
import { ProfilePage } from './pages/ProfilePage'
import { UpdateProfile } from './pages/Updates/UpdateProfile'
import { UpdateClient } from './pages/Updates/UpdateClient'
import { TypeAccountsView } from './pages/ViewsPage/TypeAccountsView'
import { ProductsView } from './pages/ViewsPage/ProductsView'
import { CreateProduct } from './pages/CreatePages/CreateProduct'
import { ServicesView } from './pages/ViewsPage/ServicesView'
import { CreateService } from './pages/CreatePages/CreateService'

export const AuthContext = createContext();

export const Index = () => {

    const [loggedIn, setLoggedIn] = useState(false)
    const [contextData, setContextData] = useState(null)

    const [dataUser, setDataUser] = useState({
        id: '',
        name: '',
        username: '',
        DPI: '',
        adress: '',
        phone: '',
        email: '',
        work: '',
        salary: '',
        role: ''
    })

    useEffect(() => {
        let token = localStorage.getItem('token')
        if (token) setLoggedIn(true)
    }, []);

    const handleLogout = () => {
        setLoggedIn(false);
        setDataUser({
            id: '',
            name: '',
            username: '',
            DPI: '',
            adress: '',
            phone: '',
            email: '',
            work: '',
            salary: '',
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
                },
                {
                    path: '/profile',
                    element: <ProfilePage />
                },
                {
                    path: '/updateProfile/:id',
                    element: <UpdateProfile />
                },
                {
                    path: '/updateClient/:id',
                    element: <UpdateClient />
                },
                {
                    path: '/typeAccount',
                    element: <TypeAccountsView />
                },
                {
                    path: '/products',
                    element: <ProductsView />
                },
                {
                    path: '/createProduct',
                    element: <CreateProduct />
                },
                {
                    path: '/services',
                    element: <ServicesView />
                },
                {
                    path: '/createServices',
                    element: <CreateService />
                }
            ]
        }
    ])
    return (
        <>
            <AuthContext.Provider value={{ loggedIn, setLoggedIn, dataUser, setDataUser }}>
                <RouterProvider router={routes} />
            </AuthContext.Provider>
        </>
    )
}
