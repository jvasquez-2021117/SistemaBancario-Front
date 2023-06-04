import React from 'react'
import { Navbar } from '../components/NavBar/Navbar'

export const AdminPage = () => {
    return (

        <>
        {/* <Navbar /> */}
            <div className="container py-3">
                <header>
                    <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
                        <h1 className="display-4 fw-normal">Options Admin</h1>
                        <p className="fs-5 text-muted">Unique option of the Administrator. Where you can enter the crud of the storage you can edit, delete and add</p>
                    </div>
                </header>
                <main>
                    
                        {/* dataUser.role != 'ADMIN-HOTEL' ? ( */}
                            <>
                                <div className="row row-cols-1 row-cols-md-2 mb-2 text-center">
                                    <div className="col">
                                        <div className="card mb-4 rounded-3 shadow-sm">
                                            <div className="card-header py-3">
                                                <h4 className="my-0 fw-normal">Type Room</h4>
                                            </div>
                                            <div className="card-body">
                                                <ul className="list-unstyled mt-3 mb-4">
                                                    <img src='#' alt="Cellars Image" className='card-img' style={{ width: "95%", height: "95%" }} />
                                                </ul>
                                                <div className='row'>
                                                    <div className='col'>
                                                        <button type="button" className="w-100 btn btn-lg btn-outline-primary" >Add</button>
                                                    </div>
                                                    <div className='col'>
                                                        <button onClick={() => navigate('/profile/viewTypeRoom')} type='button' className='w-100 btn btn-lg btn-outline-success'>View</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card mb-4 rounded-3 shadow-sm">
                                            <div className="card-header py-3">
                                                <h4 className="my-0 fw-normal">Rooms</h4>
                                            </div>
                                            <div className="card-body">
                                                <ul className="list-unstyled mt-3 mb-4">
                                                    <img src='#' alt="Accounts Image" className="card-img" style={{ width: "95%", height: "95%" }} />
                                                </ul>
                                                <div className="row">
                                                    <div className="col">
                                                        <button type="button" className="w-100 btn btn-lg btn-outline-primary">Add</button>
                                                    </div>
                                                    <div className="col">
                                                        <button onClick={() => navigate('/profile/viewRooms')} type="button" className="w-100 btn btn-lg btn-outline-success" >View</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card mb-4 rounded-3 shadow-sm">
                                            <div className="card-header py-3">
                                                <h4 className="my-0 fw-normal">Event</h4>
                                            </div>
                                            <div className="card-body">
                                                <ul className="list-unstyled mt-3 mb-4">
                                                    <img src='#' alt="Cellars Image" className='card-img' style={{ width: "95%", height: "95%" }} />
                                                </ul>
                                                <div className="row">
                                                    <div className="col">
                                                        <button type="button" className="w-100 btn btn-lg btn-outline-primary" >Add</button>
                                                    </div>
                                                    <div className="col">
                                                        <button onClick={() => navigate('/profile/viewEvent')} type='button' className='w-100 btn btn-lg btn-outline-success'>View</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card mb-4 rounded-3 shadow-sm">
                                            <div className="card-header py-3">
                                                <h4 className="my-0 fw-normal">Hotel</h4>
                                            </div>
                                            <div className="card-body">
                                                <ul className="list-unstyled mt-3 mb-4">
                                                    <img src='#' alt="Clients Image" className="card-img" style={{ width: "95%", height: "95%" }} />
                                                </ul>
                                                <div className="row">
                                                    <div className="col">
                                                        <button type="button" className="w-100 btn btn-lg btn-outline-primary" >Add</button>
                                                    </div>
                                                    <div className="col">
                                                        <button onClick={() => navigate('/profile/viewHotels')} type="button" className="w-100 btn btn-lg btn-outline-success" >View</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card mb-4 rounded-3 shadow-sm">
                                            <div className="card-header py-3">
                                                <h4 className="my-0 fw-normal">Type Event</h4>
                                            </div>
                                            <div className="card-body">
                                                <ul className="list-unstyled mt-3 mb-4">
                                                    <img src='#' alt="Cellars Image" className='card-img' style={{ width: "95%", height: "95%" }} />
                                                </ul>
                                                <div className="row">
                                                    <div className="col">
                                                        <button type="button" className="w-100 btn btn-lg btn-outline-primary" >Add</button>
                                                    </div>
                                                    <div className="col">
                                                        <button onClick={() => navigate('/profile/viewEventType')} type='button' className='w-100 btn btn-lg btn-outline-success'>View</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card mb-4 rounded-3 shadow-sm">
                                            <div className="card-header py-3">
                                                <h4 className="my-0 fw-normal">Admin Hotel</h4>
                                            </div>
                                            <div className="card-body">
                                                <ul className="list-unstyled mt-3 mb-4">
                                                    <img alt="Accounts Image" src='#' className="card-img" style={{ width: "95%", height: "95%" }} />
                                                </ul>
                                                <div className="row">
                                                    <div className="col">
                                                        <button type="button" className="w-100 btn btn-lg btn-outline-primary" >Add</button>
                                                    </div>
                                                    <div className="col">
                                                        <button type="button" onClick={() => navigate('/profile/viewAdminHotel')} className="w-100 btn btn-lg btn-outline-success" >View</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        {/* ) : */}
                            <>
                                <div className="row row-cols-1 row-cols-md-2 mb-2 text-center">
                                    <div className="col">
                                        <div className="card mb-4 rounded-3 shadow-sm">
                                            <div className="card-header py-3">
                                                <h4 className="my-0 fw-normal">Reservation</h4>
                                            </div>
                                            <div className="card-body">
                                                <ul className="list-unstyled mt-3 mb-4">
                                                    <img src='#' alt="Clients Image" className="card-img" style={{ width: "95%", height: "95%" }} />
                                                </ul>
                                                <div className="row">
                                                    <div className="col">
                                                        <button onClick={() => navigate('/profile/reservation')} type='button' className='w-100 btn btn-lg btn-outline-success'>View</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card mb-4 rounded-3 shadow-sm">
                                            <div className="card-header py-3">
                                                <h4 className="my-0 fw-normal">Services</h4>
                                            </div>
                                            <div className="card-body">
                                                <ul className="list-unstyled mt-3 mb-4">
                                                    <img alt="Accounts Image" src='#' className="card-img" style={{ width: "95%", height: "95%" }} />
                                                </ul>
                                                <div className="row">
                                                    <div className="col">
                                                        <button type="button" className="w-100 btn btn-lg btn-outline-primary" >Add</button>
                                                    </div>
                                                    <div className="col">
                                                        <button type="button" onClick={() => navigate('/profile/viewServices')} className="w-100 btn btn-lg btn-outline-success" >View</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="card mb-4 rounded-3 shadow-sm">
                                            <div className="card-header py-3">
                                                <h4 className="my-0 fw-normal">Consumption</h4>
                                            </div>
                                            <div className="card-body">
                                                <ul className="list-unstyled mt-3 mb-4">
                                                    <img src='#' alt="Clients Image" className="card-img" style={{ width: "95%", height: "95%" }} />
                                                </ul>
                                                <div className="row">
                                                    <div className="col">
                                                        <button type="button" className="w-100 btn btn-lg btn-outline-primary" >Add</button>
                                                    </div>
                                                    <div className="col">
                                                        <button onClick={() => navigate('/profile/viewConsumption')} type='button' className='w-100 btn btn-lg btn-outline-success'>View</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card mb-4 rounded-3 shadow-sm">
                                            <div className="card-header py-3">
                                                <h4 className="my-0 fw-normal">Bill</h4>
                                            </div>
                                            <div className="card-body">
                                                <ul className="list-unstyled mt-3 mb-4">
                                                    <img src='#' alt="Clients Image" className="card-img" style={{ width: "95%", height: "95%" }} />
                                                </ul>
                                                <div className="row">
                                                    <div className="col">
                                                        <button onClick={() => navigate('/profile/viewBill')} type='button' className='w-100 btn btn-lg btn-outline-success'>View</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                    
                </main>
            </div>
        </>
    )
}
