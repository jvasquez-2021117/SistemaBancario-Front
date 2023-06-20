import React from 'react'

export const TableAccountProfile = ({ _id, user, balances, typeAccount, state }) => {
    return (
        <>
            <div className='container'>
                <div className="card col-7 d-flex justify-content-center">
                    <div className='card-header'>
                        <h5 className="card-title">{user}</h5>
                        <h5>{_id} </h5>
                    </div>
                    <div className="card-body">
                        <p className="card-text">{typeAccount}</p>
                        <p className="card-text">{balances}</p>
                        <div className="row">
                            <div className="col">
                                <p className="card-text">
                                    <small className="text-muted">
                                        {state}
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                    <button>
                        Hola como estan
                    </button>
                </div>
            </div>
        </>
    )
}
