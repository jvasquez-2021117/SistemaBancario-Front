import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'


export const ModalPutDeposit = ({ isOpen, onClose, datos, update}) => {
    const navigate = useNavigate();
    const [isUpdated, setIsUpdated] = useState(false);


    const updateDeposit = async () => {
        try {
            let updatedDeposit = {
                amount: document.getElementById('inputAmount').value
            }
            const { data } = await axios.put(`http://localhost:3200/deposit/update/${datos.id}`, updatedDeposit);
            Swal.fire({
                icon: 'success',
                title: data.message,
            })
            setIsUpdated(true);
            update();
        } catch (e) {
            Swal.fire({
                icon: 'error',
                title: e.response.data.message
            })
        }
    }

    if (!isOpen || isUpdated) {
        return null
    }

    return (
        <>
            <Modal show={isOpen}>
                <Modal.Header>
                    <Modal.Title className='text-dark'>Update Deposit</Modal.Title>
                    <button onClick={onClose} type="button" className="btn" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </Modal.Header>
                <Modal.Body>
                    <form action="#">
                        <div className="user_details">
                            <div className="input_box">
                                <label htmlFor="inputAmount">Amount</label>
                                <input defaultValue={datos.amount} type="number" id="inputAmount" placeholder="Enter the amount" name='amount' required />
                            </div>
                        </div>
                        <div className="reg_btn">
                            <button type='button' onClick={() => {updateDeposit(); onClose()}} >Update</button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    )
}
