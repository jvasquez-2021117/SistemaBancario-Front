import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { TableClient } from '../components/Tables/TableClient';
import { SiberBar } from '../components/Sidebar/SiberBar';

export const ClienteView = () => {
    const [tableClient, setTableClient] = useState([{}]);
    const navigate = useNavigate()

    const getTableClient = async () => {
        try {
            const { data } = await axios('http://localhost:3200/user/get');
            setTableClient(data.users)
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => getTableClient, [])
    return (
        <>
        <>
        <SiberBar />
            <br />
            <nav className="navbar navbar-expand-lg navbar-light" style={{ background: "#9dc19d" }}>
                <div className="container-fluid">
                    <div className="collapse navbar-collapse justify-content-center" id="navbarCenteredExample" >
                        <h1 className='text-white' style={{ fontSize: "2.5rem" }}>VIEW RESERVATION</h1>
                    </div>
                </div>
            </nav>
            <div className="container t">
                <div className="row d-flex justify-content-center ">
                    <div className="col-md-2 col-lg-6">
                        <div className="row">
                            <div className="col">
                                <input type="search" id="form1" className="form-control" />
                                <label className="form-label" htmlFor="form1" />
                            </div>
                            <div className="col">
                                <button type="button" className="btn btn-primary mx-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 col-lg-2">
                        <div className="row">                            
                            <div className="col">
                                <button onClick={(() => navigate('/profile/optionAdmin'))} className='btn btn-danger'>
                                    Exit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <section className="intro">
                <div className="bg-image h-100" style={{ backgroundColor: '#f5f7fa' }}>
                    <div className="mask d-flex align-items-center h-100">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12">
                                    <div className="card">
                                        <div className="card-body p-0">
                                            <div className="table-responsive table-scroll" data-mdb-perfect-scrollbar="true" style={{ position: 'relative', height: '700px' }}>
                                                <table className="table table-striped ">
                                                    <thead style={{ backgroundColor: '#8c7c62' }}>
                                                        <tr>
                                                            <th scope="col">Name</th>
                                                            <th scope="col">Username</th>
                                                            <th scope="col">No. Account</th>
                                                            <th scope="col">DPI</th>
                                                            <th scope='col'>Address</th>
                                                            <th scope='col'>Phone</th>
                                                            <th scope='col'>Email</th>
                                                            <th scope='col'>Password</th>
                                                            <th scope='col'>Work</th>
                                                            <th scope='col'>Salary</th>
                                                            <th scope='col'>Role</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            tableClient.map(({_id, name, username, noAccount, DPI, adress, phone, email, password, work, salary, role}, index) => {
                                                                return(
                                                                    <tr key={index}>
                                                                        <TableClient
                                                                        name={name}
                                                                        username={username}
                                                                        noAccount={noAccount}
                                                                        DPI={DPI}
                                                                        adress={adress}
                                                                        phone={phone}
                                                                        email={email}
                                                                        password={password}
                                                                        work={work}
                                                                        salary={salary}
                                                                        role={role}
                                                                        ></TableClient>
                                                                    </tr>
                                                                )
                                                            })
                                                        }
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <br />
        </>
        </>
    )
}
