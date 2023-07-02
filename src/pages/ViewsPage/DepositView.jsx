import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SiberBar } from '../../components/Sidebar/SiberBar'
import { TableDeposit } from '../../components/Tables/TableDeposit'
import { ModalDeposit } from '../../components/Modal/ModalDeposit'
import { ModalPutDeposit } from '../Updates/ModalPutDeposit'

export const DepositView = () => {
  const [deposit, setDeposit] = useState([{}])
  const navigate = useNavigate()
  const [showModalDeposit, setShowModalDeposit] = useState(false);
  const [showModalPutDeposit, setShowModalPutDeposit] = useState(false);
  const [datos, setDatos] = useState({});
  

  const getTableDeposit = async () => {
    try {
      const { data } = await axios('http://localhost:3200/deposit/get');
      setDeposit(data.deposits)
    } catch (e) {
      console.log(e);
    }
  }

  const updateData = async() =>{
    try {
      getTableDeposit();
    } catch (e) {
      console.log(e);
    }
  }

  const handleOpenModal = () => {
    setShowModalDeposit(true);
  }
  const handleCloseModal = () => {
    setShowModalDeposit(false);
  }
  const handleOpenModal2 = (id, amount) => {
    let datos1 = {
      id: id,
      amount: amount
    }
    setDatos(datos1);
    setShowModalPutDeposit(true);
  }
  const handleCloseModal2 = () => {
    setShowModalPutDeposit(false);
    /* getTableDeposit(); */
  }

  useEffect(() => getTableDeposit, [])

  return (
    <>
      <SiberBar />
      <nav className='navbar navbar-expand-lg navbar-light' style={{ marginTop: '6rem' }}>
        <div className='container-fluid'>
          <div className='collapse navbar-collapse justify-content-center' id='navbarCenteredExample' >
            <h1 className='text-black' style={{ fontSize: '2.5rem' }}>VIEW DEPOSITS</h1>
          </div>
        </div>
      </nav>
      <div className="container t">
        <div className="row d-flex justify-content-center ">
          <div className="a1">
            <div className="search-box">
              <div className="row1">
                <input type="text" id='inputSearch' placeholder='Search' />
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" fill="currentColor" className="bi bi-search bi-solid" viewBox="0 0 16 25">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-lg-2">
            <div className="row">
              <div className="col1">
                <a href="#" onClick={handleOpenModal} className='btn1'>CREATE</a>
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
                <div className='col-10'>
                  <div className='card'>
                    <div className='card-body p-0'>
                      <div className='table-responsive table-scroll' data-mdb-perfect-scrollbar='true' style={{ position: 'relative', height: '700px' }}>
                        <table className='table table-striped '>
                          <thead style={{ backgroundColor: '#8c7c62' }}>
                            <tr>
                              <th scope='col' className='text-white' style={{ backgroundColor: '#15297c' }} >No. Account</th>
                              <th scope='col' className='text-white' style={{ backgroundColor: '#15297c' }} >Nombre</th>
                              <th scope='col' className='text-white' style={{ backgroundColor: '#15297c' }} >Monto</th>
                              <th scope='col' className='text-white' style={{ backgroundColor: '#15297c' }} >Date</th>
                              <th scope='col' className='text-white' style={{ backgroundColor: '#15297c' }} >Hour</th>
                              <th scope='col' className='text-white' style={{ backgroundColor: '#15297c' }} >Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {
                              deposit.map(({ _id, accountReq, amount, accountReq2, date, hour }, i) => {
                                return (
                                  <tr key={i}>
                                    <TableDeposit
                                      accountReq={accountReq?._id}
                                      accountReq2={accountReq?.user.name}
                                      amount={amount}
                                      date={date}
                                      hour={hour}
                                    ></TableDeposit>
                                    <td className='text-center align-middle'>
                                      <div className='btn-group align-top'>
                                        <div className='btn btn-sm btn-primary btn-outline-secondary badge'>
                                          <button onClick={() => handleOpenModal2(_id, amount)} className='btn badge' type='button' data-toggle='modal' data-target='#user-form-modal'>
                                            <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi2 bi-pencil-square' viewBox='0 0 16 16'>
                                              <path d='M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z' />
                                              <path fillRule='evenodd' d='M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z' />
                                            </svg>
                                          </button>
                                        </div>
                                        <div className='btn btn-sm btn-danger btn-outline-secondary badge'>
                                          <button className='btn badge' type='button'>
                                            <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi2 bi-trash-fill' viewBox='0 0 16 16'>
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
      <ModalDeposit isOpen={showModalDeposit} onClose={handleCloseModal} />
      <ModalPutDeposit isOpen={showModalPutDeposit} onClose={handleCloseModal2} datos={datos} update={updateData}/>
    </>
  )
}
