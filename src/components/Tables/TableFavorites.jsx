import React from 'react'

export const TableFavorites = ({owner, accountFav}) => {
    return (
        <>
            <div className='container'>
                <div className="card col-8 mx-auto">
                    <div className='card-header'>
                        <h5 className="card-title">{owner}</h5>
                        <h5 className="card-title">CUENTA {accountFav} </h5>
                    </div>
                    <div className="card-body">
                        <div className="#">
                        </div>
                        <p className="card-text text-end h5">
                            GTQ  <br />
                            {/* <img src={CashLogo} className="img-fluid" alt="..." style={{ width: '8%', filter: 'invert(100%)', position: 'absolute', transform: 'translate(-1100%, -35%)', opacity: '0.5' }} /> */}
                            <small className="text-muted">Saldo</small>
                        </p>
                    </div>
                    {/* <div className="reg_btn">
                        <div className="row">
                            <div className="col">
                                <button type='button' onClick={handleOpenModal} className='btn btn-primary' style={{ backgroundColor: '#2c4893' }}>Transfer</button>
                            </div>
                            <div className="col">
                                <button type='button' onClick={() => navigate('/account')} className='btn btn-primary' style={{ backgroundColor: '#2c4893' }}>Record</button>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            <br />
        </>
    )
}
