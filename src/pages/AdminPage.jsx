import React, { useState } from 'react'
import { SiberBar } from '../components/Sidebar/SiberBar'
import { useNavigate } from 'react-router-dom'
import { ModalTransder } from '../components/Modal/ModalTransder';

export const AdminPage = () => {
    const navigate = useNavigate();

    const [showModalTransfer, setShowModalTransfer] = useState(false);

    const handleOpenModal = () => {
        setShowModalTransfer(true);
        console.log(showModalTransfer);
    }
    const handleCloseModal = () => {
        setShowModalTransfer(false);
    }

    return (
        <>
            <SiberBar />
            <div className="container py-3" style={{ marginTop: "4.5rem" }}>
                <header>
                    <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
                        <h1 className="display-4 fw-normal">Options Admin</h1>
                        <p className="fs-5 text-muted">Unique option of the Administrator. Where you can enter the crud of the storage you can edit, delete and add</p>
                    </div>
                </header>
                <main>
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
                                            <button type="button" className="w-100 btn btn-lg btn-outline-primary" onClick={handleOpenModal} >Tranfer</button>
                                        </div>
                                        <div className='col'>
                                            <button onClick={() => navigate('/profile/viewTypeRoom')} type='button' className='w-100 btn btn-lg btn-outline-success'>View</button>
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
                    </div>
                </main>
            </div>
            <ModalTransder isOpen={showModalTransfer} onClose={handleCloseModal}/>
        </>
    )
}
