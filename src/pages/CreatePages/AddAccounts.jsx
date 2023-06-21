import React, { useEffect, useState } from 'react'
import { SiberBar } from '../../components/Sidebar/SiberBar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'



export const AddAccounts = () => {

    const [typeAccount, setTypeAccount] = useState([{}]);
    const [user, setUser] = useState([{}]);
    const navigate = useNavigate();

    const getTypeAccount = async () => {
        try {
            const { data } = await axios.get('http://localhost:3200/typeAccount/get');
            setTypeAccount(data.types);
        } catch (e) {
            console.log(e);
        }
    }

    const getUsers = async () => {
        try {
            const { data } = await axios.get('http://localhost:3200/user/get');
            setUser(data.users)
        } catch (e) {
            console.log(e);
        }
    }

    const addAccount = async () => {
        try {
            let add = {
                typeAccount: document.getElementById('inputTypeAccount').value,
                user: document.getElementById('inputUser').value
            }
            const { data } = await axios.post('http://localhost:3200/account/add', add);
            alert(data.message)
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => { getTypeAccount(), getUsers() }, []);

    return (
        <>
            <SiberBar></SiberBar>
            <div className="mother">
                <div className="container1">
                    <div className="title">
                        <p>Add Account</p>
                    </div>
                    <form action="#">
                        <div className="user_details">
                            <div className="input_box">
                                <label htmlFor="inputName">Type Account</label>
                                <select className='form-select' id='inputTypeAccount'>
                                    <option defaultValue={'Open this select menu'}>Open this select menu</option>
                                    {
                                        typeAccount.map(({ _id, name }, i) => {
                                            return (
                                                <option key={i} value={_id} className=''>{name}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className="input_box">
                                <label htmlFor="inputUsername">User</label>
                                <select className='form-select' id='inputUser'>
                                    <option defaultValue={'Open this select menu'}>Open this select menu</option>
                                    {
                                        user.map(({ _id, name, username, DPI }, i) => {
                                            return (
                                                <option key={i} value={_id} className=''>{username}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="reg_btn">
                            <div className="row">
                                <div className="col">
                                    <button type='button' onClick={() => addAccount()} className='btn btn-primary' style={{ backgroundColor: '#2c4893' }}>AddAccount</button>
                                </div>
                                <div className="col">
                                    <button type='button' onClick={() => navigate('/account')} className='btn btn-primary' style={{ backgroundColor: '#2c4893' }}>Cancel</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
