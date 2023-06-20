import React, { useState } from 'react'
import { SiberBar } from '../../components/Sidebar/SiberBar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import Swal from 'sweetalert2';


export const CreateDeposit = () => {
    const navigate = useNavigate();

    const [ form, setForm ] = useState({
        accountReq: '',
        amount: ''
    })

    const createHandleChange =(e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const create = async() => {
        try {
            const { data } = await axios.post('http://localhost:3200/deposit/add', form);
            Swal.fire({
                icon: 'success',
                title: data.message
            })
            navigate('/deposits')
        } catch (e) {
            Swal.fire({
                icon: 'error',
                title: data.message
            })
        }
    }
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
                                <label htmlFor="inputAccount">No. Account</label>
                                <input type="text" id="inputAccount" placeholder="Enter the No. Account" onChange={createHandleChange} name='accountReq' required />
                            </div>
                            <div className="input_box">
                                <label htmlFor="inputAmount">Amount</label>
                                <input type="number" id="inputAmount" placeholder="Enter the amount" name='amount' onChange={createHandleChange} required />
                            </div>
                        </div>
                        <div className="reg_btn">
                            <button type='button' onClick={(e) => create(e)} >Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
