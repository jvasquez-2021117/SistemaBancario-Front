import axios from 'axios';
import React, { useState } from 'react'
import { Modal} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';

export const ModalTransder = ({ isOpen, onClose }) => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        accountReq: '',
        accountSender: '',
        amount: '',
        description: '',
        dpi: ''
    })

    const createHandleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const create = async () => {
        try {
            const { data } = await axios.post('http://localhost:3200/transfer/add', form)
            Swal.fire({
                icon: 'success',
                title: data.message
            })
            navigate('/ProfileAccountUser')
        } catch (e) {
            Swal.fire({
                icon: 'error',
                title: data.message
            })
        }
    }

    if (!isOpen) {
        return null;
    }
    return (
        <>
            <Modal show={isOpen}>
                <Modal.Header>
                    <Modal.Title className='text-dark'>Transfer</Modal.Title>
                    <button  onClick={onClose} type="button" className="btn" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </Modal.Header>
                <Modal.Body>
                    <form action="#">
                        <div className="user_details">
                            <div className="input_box">
                                <label htmlFor="inputRes">Reseptor</label>
                                <input type="text" id="inputRes" placeholder="Enter the No. Account" onChange={createHandleChange} name='accountReq' required />
                            </div>
                            <div className="input_box">
                                <label htmlFor="inputReq">Emisor</label>
                                <input type="text" id="inputReq" placeholder="Enter the amount" name='accountSender' onChange={createHandleChange} required />
                            </div>
                            <div className="input_box">
                                <label htmlFor="inputAmount">Amount</label>
                                <input type="number" id="inputAmount" placeholder="Enter the amount" name='amount' onChange={createHandleChange} required />
                            </div>
                            <div className="input_box">
                                <label htmlFor="inputDpi">DPI</label>
                                <input type="number" id="inputDpi" placeholder="Enter the amount" name='dpi' onChange={createHandleChange} required />
                            </div>
                            <div className='input_box' style={{ width: '100%' }}>
                                <label htmlFor='inputDescrip'>Description</label>
                                <input type='text' id='inputDescrip' placeholder='Enter your Address' name='description' onChange={createHandleChange} required />
                            </div>
                        </div>
                        <div className="reg_btn">
                            <button type='button' onClick={(e) => create(e)} >Create</button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    )
}
