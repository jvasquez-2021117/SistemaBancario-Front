import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react'
import { Modal, ModalBody, ModalHeader, ModalTitle } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
import { AuthContext } from '../../Index';

export const ModalShopService = ({ isOpen, onClose, id }) => {
    const { dataUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [ accounts, setAccounts ] = useState([{}])

    const getAccounts = async()=>{
        try{
            const { data } = await axios(`http://localhost:3200/account/getByUser/${dataUser.id}`)
            setAccounts(data.accounts);
        }catch(e){
            console.log(e);
        }
        console.log(id);
    }

    const [form, setForm] = useState({
        service: `${id}`,
        account: ''
    })

    const createHandleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const create = async () => {
        try {
            const { data } = await axios.post('http://localhost:3200/shopService/buyService', form)
            Swal.fire({
                icon: 'success',
                title: data.message
            })
        } catch (e) {
            Swal.fire({
                icon: 'error',
                title: data.message
            })
        }
    }

    useEffect(()=> getAccounts , [])

    if (!isOpen) {
        return null;
    }
    return (
        <>
            <Modal show={isOpen}>
                <Modal.Header>
                    <Modal.Title className='text-dark'>{id.name}</Modal.Title>
                    <button  onClick={onClose} type="button" className="btn" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </Modal.Header>
                <Modal.Body>
                    <form action="#">
                        <div className="user_details">
                            <div className="input_box">
                                <label htmlFor="inputName">Account</label>
                                <select className='form-select' id='inputTypeAccount'>
                                    <option defaultValue={'Enter your account for pay'}>Open this select menu</option>
                                    {
                                        accounts.map(({ _id, balances, typeAccount, state }, i) => {
                                            return (
                                                <option key={i} value={_id} className=''>{ 'No. Account:' + ' ' + _id + ' | ' + 'Balance:' + ' ' + balances}</option>
                                            )
                                        })
                                    }
                                </select>
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
