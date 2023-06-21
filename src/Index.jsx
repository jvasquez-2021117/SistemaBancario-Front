import React, { createContext } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { LoginPage } from './pages/LoginPage'
import { AdminPage } from './pages/AdminPage'
import { AddClient } from './pages/CreatePages/AddClient'
import { ClienteView } from './pages/ViewsPage/ClienteView'
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
import { AddAccounts } from './pages/CreatePages/AddAccounts'
import { UpdateServices } from './pages/Updates/UpdateServices'
import { UpdateProduct } from './pages/Updates/UpdateProduct'
import { TransferView } from './pages/ViewsPage/TransferView'
import { DepositView } from './pages/ViewsPage/DepositView'
import { CreateDeposit } from './pages/CreatePages/CreateDeposit'
import { ProfileAccountsPage } from './pages/ProfileAccountsPage'
import { AccountView } from './pages/ViewsPage/AccountView'


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
                    path: '/home',
                    element: <AdminPage />
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
                },
                {
                    path: '/updateService/:id',
                    element: <UpdateServices />
                },
                {
                    path: '/createAccount',
                    element: <AddAccounts />
                },
                {
                    path: '/account',
                    element: <AccountView />
                },
                {
                    path: '/updateProduct/:id',
                    element: <UpdateProduct />
                },
                {
                    path: '/tranfers',
                    element: <TransferView />
                },
                {
                    path: '/deposits',
                    element: <DepositView />
                },
                {
                    path: '/createDeposit',
                    element: <CreateDeposit />
                },
                {
                    path: '/ProfileAccountUser',
                    element: <ProfileAccountsPage />
                },
                
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
