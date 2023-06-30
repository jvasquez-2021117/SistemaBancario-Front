import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SiberBar } from '../../components/Sidebar/SiberBar'
import { TableDeposit } from '../../components/Tables/TableDeposit'
import { AuthContext } from '../../Index'

export const HistoryView = () => {
  const [data, setData] = useState([{}]);
  const [showDeposit, setShowDeposit] = useState(false);
  const [showTransfer, setTransfer] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [title, setTitle] = useState('History');

  const navigate = useNavigate();
  const { dataUser } = useContext(AuthContext)

  const getDeposit = async (activate2) => {
    try {
      setTitle('History Deposit');
      handleButtonClick(activate2);
      const { data } = await axios(`http://localhost:3200/historyDeposit/get/${dataUser.id}`);
      setData(data.history)
      console.log(showDeposit);
    } catch (e) {
      console.log(e);
    }
  }

  const getTransfer = async (activate2) => {
    try {
      setTitle('History Transfer');
      handleButtonClick(activate2);
      const { data } = await axios(`http://localhost:3200/historyTransfer/get/${dataUser.id}`);
      setData(data.history)
    } catch (e) {
      console.log(e);
    }
  }

  function handleButtonClick(activate) {
    const newState = {
      showDeposit: false,
      showProducts: false,
      showTransfer: false,
      showServices: false

    }

    switch (activate) {
      case 'showDeposit':
        newState.showDeposit = true;
        break;
      case 'showTransfer':
        newState.showTransfer = true;
        break;
      case 'showProducts':
        newState.showProducts = true;
        break;
      case 'showService':
        newState.showServices = true;
        break;
      default:
        break;
    }

    setShowDeposit(newState.showDeposit);
    setTransfer(newState.showTransfer);
    setShowServices(newState.showServices);
    setShowProducts(newState.showProducts);

  }


  return (
    <>
      <SiberBar />
      <nav className='navbar navbar-expand-lg navbar-light' style={{ marginTop: '6rem' }}>
        <div className='container-fluid'>
          <div className='collapse navbar-collapse justify-content-center' id='navbarCenteredExample' >
            <h1 className='text-black' style={{ fontSize: '2.5rem' }}>{title}</h1>
          </div>
        </div>
      </nav>
      <div className="container t">
        <div className="row d-flex justify-content-center ">
          <div className="col-md-2 col-lg-5">
            <div className="row">
              <div className="col1">
                <a href="#" onClick={() => getDeposit('showDeposit', this)} className='btn1' >Deposit</a>
                <a href="#" onClick={() => getTransfer('showTransfer', this)} className='btn1'>Transfer</a>
                <a href="#" onClick={() => navigate('/createDeposit')} className='btn1'>Products</a>
                <a href="#" onClick={() => navigate('/createDeposit')} className='btn1'>Services</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className='intro' style={{marginTop: '3rem'}}>
        <div className='bg-image h-100' style={{ backgroundColor: '#f5f7fa', marginTop: '1.5rem' }}>
          <div className='mask d-flex align-items-center h-100'>
            <div className='container'>
              <div className='row justify-content-center'>
                <div className='col-10' >
                  <div className='card box-shadow'>
                    <div className='card-body p-0'>
                      <div className='table-responsive table-scroll' data-mdb-perfect-scrollbar='true' style={{ position: 'relative', height: '700px' }}>
                        <table className='table table-striped'>
                          <thead style={{ backgroundColor: '#8c7c62' }}>
                            <tr>
                              {
                                showDeposit ?
                                  <>
                                    <th scope='col' className='text-white' style={{ backgroundColor: '#15297c' }} >ID</th>
                                    <th scope='col' className='text-white' style={{ backgroundColor: '#15297c' }} >AMOUNT</th>
                                    <th scope='col' className='text-white' style={{ backgroundColor: '#15297c' }} >DATE</th>
                                    <th scope='col' className='text-white' style={{ backgroundColor: '#15297c' }} >HOUR</th>
                                  </>
                                :
                                showTransfer ? 
                                  <>
                                    <th scope='col' className='text-white' style={{ backgroundColor: '#15297c' }} >ACCOUNT SENDER</th>
                                    <th scope='col' className='text-white' style={{ backgroundColor: '#15297c' }} >ACCOUNT REQ</th>
                                    <th scope='col' className='text-white' style={{ backgroundColor: '#15297c' }} >AMOUNT</th>
                                    <th scope='col' className='text-white' style={{ backgroundColor: '#15297c' }} >DATE</th>
                                    <th scope='col' className='text-white' style={{ backgroundColor: '#15297c' }} >HOUR</th>
                                    <th scope='col' className='text-white' style={{ backgroundColor: '#15297c' }} >DESCRIPTION</th>
                                  </>
                                : <></> 
                              }
                            </tr>
                          </thead>
                          <tbody>
                            {
                              
                              showDeposit ? 
                              
                              data.map(({ _id, deposit }, i) => {
                                return (
                                  
                                  <tr key={i}>
                                         <td>{deposit?._id}</td>
                                          <td>{deposit?.amount}</td>
                                          <td>{deposit?.date}</td>
                                          <td>{deposit?.hour}</td>
                                  </tr>
                                )
                              })
                             : showTransfer ?
                              data.map(({_id, transfer}, i) => {
                                return (
                                  <tr key={i}>
                                    <td>{transfer?.accountSender}</td>
                                    <td>{transfer?.accountReq}</td>
                                    <td>{transfer?.amount}</td>
                                    <td>{transfer?.date}</td>
                                    <td>{transfer?.hour}</td>
                                    <td>{transfer?.description}</td>
                                  </tr>
                                )
                              })
                             : <></>

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
