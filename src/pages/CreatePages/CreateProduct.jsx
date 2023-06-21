import React, { useState } from 'react'
import { SiberBar } from '../../components/Sidebar/SiberBar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import Swal from 'sweetalert2';

export const CreateProduct = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: '',
        price: ''
    })

    const createHandleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const create = async () => {
        try {
            const { data } = await axios.post('http://localhost:3200/product/add', form)
            Swal.fire({
                icon: 'success',
                title: data.message
            })
            navigate('/products')
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <>
            <SiberBar />
            <div className="mother">
                <div className="container1">
                    <div className="title">
                        <p>Create Product</p>
                    </div>
                    <form action="#">
                        <div className="user_details">
                            <div className="input_box">
                                <label htmlFor="inputName">Name</label>
                                <input type="text" id="inputName" placeholder="Enter the name" name='name' onChange={createHandleChange} required />
                            </div>
                            <div className="input_box">
                                <label htmlFor="inputUsername">Price</label>
                                <input type="number" id="inputPrice" placeholder="Enter the price" name='price' onChange={createHandleChange} required />
                            </div>
                        </div>
                        <div className="reg_btn">
                            <div className="row">
                                <div className="col">
                                    <button type='button' onClick={(e) => create(e)} >Create</button>
                                </div>
                                <div className="col">
                                    <button type='button' onClick={() => navigate('/products')} >Cancel</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
