import React, { useContext, useState } from 'react'
/* import logo from '../../assets/logoHeader.png' */
import '../CSS/style.css'
import { Link } from 'react-router-dom'
import { SiberBar } from '../Sidebar/SiberBar'
/* import { AuthContext } from '../../Index' */

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    /* const { dataUser, loggedIn } = useContext(AuthContext) */

    return (
        <>
            <nav className="navbar navbar-expand-lg bg1 sticky-top navbar-light p-3 shadow-sm" style={{ position: "fixed", width: "100%" }}>
                <div className="container">
                    <Link to={'/'} id='a' className="navbar-brand d-block d-lg-none">
                        <img src='#' height="30px" />
                    </Link>
                    <li className="nav-item d-none d-lg-block">
                        <Link to={'/'} className="nav-link mx-2">
                            <img className="img-hover" src='#' height="50px" />
                        </Link>
                    </li>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className=" collapse navbar-collapse" id="navbarNavDropdown">
                        <h3>CashTrust</h3>
                        <ul className="navbar-nav ms-auto ">
                            <li className="nav-item">
                                <Link to={'/home'} id='aXD' className="nav-link mx-2 text-uppercase">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/profile'} id='aXD' className="nav-link mx-2 text-uppercase">
                                    Login
                                </Link>
                            </li>
                            {
                                /* loggedIn == true && dataUser.role == 'ADMIN-APP' ? (
                                    <>
                                        <li className="nav-item">
                                            <Link to={'/profile/graph'} id='aXD' className="nav-link mx-2 text-uppercase">
                                                Statistics
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to={'/profile/optionAdmin'} id='aXD' className="nav-link mx-2 text-uppercase">
                                                Option
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to={'/profile/users'} id='aXD' className="nav-link mx-2 text-uppercase">
                                                Users
                                            </Link>
                                        </li>
                                    </>
                                ) : loggedIn == true && dataUser.role == 'ADMIN-HOTEL' ? (
                                    <li className="nav-item">
                                        <Link to={'/profile/optionAdmin'} id='aXD' className="nav-link mx-2 text-uppercase">
                                            Option
                                        </Link>
                                    </li>
                                ) :
                                    <></> */
                            }
                        </ul>
                        <div className="dropdown">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                            </svg>
                            <div className="dropdown-content">
                                <p>Perfil</p>
                                <p>Cuentas</p>
                                <p>LogOut</p>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}