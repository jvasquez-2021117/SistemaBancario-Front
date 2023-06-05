import React from 'react'
import { useNavigate } from 'react-router-dom'

export const SiberBar = () => {
    const navigate = useNavigate()
    return (
        <>
            <div>
                <nav className="main-menu">
                    <ul>
                        <li className="has-subnav">
                            <a href="#" onClick={() => navigate('/create')}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" fill="currentColor" className="bi bi-person-fill-add bi-2x " viewBox="0 0 16 16">
                                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z" />
                                </svg>
                                <span className="nav-text">
                                    Add Client
                                </span>
                            </a>
                        </li>
                        <li className="has-subnav">
                            <a href="#" onClick={() => navigate('/clients')}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-gear" viewBox="0 0 16 16">
                                    <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm.256 7a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Zm3.63-4.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382l.045-.148ZM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
                                </svg>
                                <span className="nav-text">
                                    Manage account
                                </span>
                            </a>
                        </li>
                        <li className="has-subnav">
                            <a href="#">
                                <i className="fa fa-comments fa-2x"></i>
                                <span className="nav-text">
                                    Group Hub Forums
                                </span>
                            </a>
                        </li>
                        <li className="has-subnav">
                            <a href="#">
                                <i className="fa fa-camera-retro fa-2x"></i>
                                <span className="nav-text">
                                    Survey Photos
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-film fa-2x"></i>
                                <span className="nav-text">
                                    Surveying Tutorials
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-book fa-2x"></i>
                                <span className="nav-text">
                                    Surveying Jobs
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-cogs fa-2x"></i>
                                <span className="nav-text">
                                    Tools & Resources
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-map-marker fa-2x"></i>
                                <span className="nav-text">
                                    Member Map
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-info fa-2x"></i>
                                <span className="nav-text">
                                    Documentation
                                </span>
                            </a>
                        </li>
                    </ul>
                    <ul className="logout">
                        <li>
                            <a href="#">
                                <i className="fa fa-power-off fa-2x"></i>
                                <span className="nav-text">
                                    Logout
                                </span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
