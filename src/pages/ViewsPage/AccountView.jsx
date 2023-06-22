import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { SiberBar } from '../../components/Sidebar/SiberBar';
import { TableAccount } from '../../components/Tables/TableAccount';

export const AccountView = () => {

    const [tableAccount, setTableAccount] = useState([{}]);
    const [accounts, setAccounts] = useState([{}])
    const [search, setSearch] = useState("")
    const navigate = useNavigate();

    const getTableAccount = async () => {
        try {
            const { data } = await axios('http://localhost:3200/account/get');
            setTableAccount(data.accounts)
            setAccounts(data.accounts)
        } catch (e) {
            console.log(e);
        }
    }

    const handleChangeSearch = (e) => {
        setSearch(e.target.value)
        filtrar(e.target.value)
    }

    const filtrar = (searchTerm) => {
        var resultSearch = tableAccount.filter((elemento) => {
            if (elemento._id.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
                elemento.user.name.toString().toLowerCase().includes(searchTerm.toLowerCase())) return elemento
        })
        setAccounts(resultSearch)
    }

    const sortTableByMovementsAscendt = () => {
        const sortedTable = [...tableAccount].sort((a, b) => b.movements - a.movements);
        setTableAccount(sortedTable)
    }

    const sortTableByMovementsDescendt = () => {
        const sortedTable = [...tableAccount].sort((a, b) => a.movements - b.movements);
        setTableAccount(sortedTable)
    }

    useEffect(() => {
        getTableAccount();
    }, [])

    return (
        <>
            <SiberBar />
            <nav className='navbar navbar-expand-lg navbar-light' style={{ marginTop: '6rem' }}>
                <div className='container-fluid'>
                    <div className='collapse navbar-collapse justify-content-center' id='navbarCenteredExample' >
                        <h1 className='text-black' style={{ fontSize: '2.5rem' }}>VIEW ACCOUNTS</h1>
                    </div>
                </div>
            </nav>
            <div className="container t">
                <div className="row d-flex justify-content-center ">
                    <div className="a1">
                        <div className="search-box">
                            <div className="row1">
                                <input type="text" id='inputSearch' placeholder='Search' defaultValue={search} onChange={handleChangeSearch} />
                                <label htmlFor="inputSearch">
                                    <button>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" fill="currentColor" className="bi bi-search bi-solid" viewBox="0 0 16 25">
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                        </svg>
                                    </button>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 col-lg-2">
                        <div className="row">
                            <div className="col1">
                                <a href="#" onClick={() => navigate('/createAccount')} className='btn1'>CREATE</a>
                                <a href="#" onClick={() => sortTableByMovementsAscendt()} className='btn1'>DESCENDETE</a>
                                <a href="#" onClick={() => sortTableByMovementsDescendt()} className='btn1'>ASCENDETE</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <section className='intro'>
                <div className='bg-image h-100' style={{ backgroundColor: '#f5f7fa', marginTop: '1.5rem' }}>
                    <div className='mask d-flex align-items-center h-100'>
                        <div className='container'>
                            <div className='row justify-content-center'>
                                <div className='col-12'>
                                    <div className='card'>
                                        <div className='card-body p-0'>
                                            <div className='table-responsive table-scroll' data-mdb-perfect-scrollbar='true' style={{ position: 'relative', height: '700px' }}>
                                                <table className='table table-striped '>
                                                    <thead style={{ backgroundColor: '#8c7c62' }}>
                                                        <tr>
                                                            <th scope='col' className='text-white' style={{ backgroundColor: '#15297c' }} >No. Account</th>
                                                            <th scope='col' className='text-white' style={{ backgroundColor: '#15297c' }} >Balance</th>
                                                            <th scope='col' className='text-white' style={{ backgroundColor: '#15297c' }} >Type Account</th>
                                                            <th scope='col' className='text-white' style={{ backgroundColor: '#15297c' }} >State</th>
                                                            <th scope='col' className='text-white' style={{ backgroundColor: '#15297c' }} >Username</th>
                                                            <th scope='col' className='text-white' style={{ backgroundColor: '#15297c' }} >DPI</th>
                                                            <th scope='col' className='text-white' style={{ backgroundColor: '#15297c' }} >Movements</th>
                                                            <th scope='col' className='text-white' style={{ backgroundColor: '#15297c' }} >Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            accounts.map(({ _id, balances, typeAccount, state, user, dpi, movements }, i) => {
                                                                return (
                                                                    <tr key={i}>
                                                                        <TableAccount
                                                                            _id={_id}
                                                                            balances={balances}
                                                                            typeAccount={typeAccount?.name}
                                                                            state={state}
                                                                            user={user?.username}
                                                                            dpi={dpi}
                                                                            movements={movements}
                                                                        ></TableAccount>
                                                                        <td className='text-center align-middle'>
                                                                            <div className='btn-group align-top'>
                                                                                <div className='btn btn-sm btn-primary btn-outline-secondary badge'>
                                                                                    <button onClick={() => navigate(`/updateClient/${_id}`)} className='btn badge' type='button' data-toggle='modal' data-target='#user-form-modal'>
                                                                                        <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-pencil-square' viewBox='0 0 16 16'>
                                                                                            <path d='M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z' />
                                                                                            <path fillRule='evenodd' d='M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z' />
                                                                                        </svg>
                                                                                    </button>
                                                                                </div>
                                                                                <div className='btn btn-sm btn-danger btn-outline-secondary badge'>
                                                                                    <button className='btn badge' type='button'>
                                                                                        <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-trash-fill' viewBox='0 0 16 16'>
                                                                                            <path d='M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z' />
                                                                                        </svg>
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        </td>
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
    )
}