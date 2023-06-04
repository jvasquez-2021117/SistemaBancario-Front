import React, { useContext, useState } from 'react'
/* import logo from '../../assets/logoHeader.png' */
import '../CSS/style.css'
import { Link } from 'react-router-dom'
import { SiberBar } from '../Sidebar/SiberBar'
/* import { AuthContext } from '../../Index' */

export const Navbar = () => {

    /* const { dataUser, loggedIn } = useContext(AuthContext) */

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white sticky-top navbar-light p-3 shadow-sm" style={{position: "fixed", width: "100%"}}>
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
                        <h4>Sistema Bancario</h4>
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
                    </div>
                </div>
            </nav>
        </>
    )
}
