import React from 'react'
import { SiberBar } from '../../components/Sidebar/SiberBar'

export const CreateDeposit = () => {
    return (
        <>
            <SiberBar />
            <div className="mother">
                <div className="container1">
                    <div className="title">
                        <p>Create Deposit</p>
                    </div>
                    <form action="#">
                        <div className="user_details">
                            <div className="input_box">
                                <label htmlFor="inputName">Name</label>
                                <input type="text" id="inputName" placeholder="Enter the name" name='name' /* onChange={createHandleChange} */ required />
                            </div>
                            <div className="input_box">
                                <label htmlFor="inputUsername">Amount</label>
                                <input type="number" id="inputPrice" placeholder="Enter the price" name='price' /* onChange={createHandleChange} */ required />
                            </div>
                        </div>
                        <div className="reg_btn">
                            <button type='button' /* onClick={(e) => create(e)} */ >Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
