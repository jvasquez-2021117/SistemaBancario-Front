import axios from 'axios'
import React, { useState, useContext } from 'react'
/* import { AuthContext } from '../Index' */
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

export const LoginPage = () => {

    const navigate = useNavigate();

    /* const { setLoggedIn, setDataUser } = useContext(AuthContext);
    const [form, setForm] = useState({
        email: '',
        password: ''
    }) */

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const login = async (e) => {
        try {
            e.preventDefault()
            const { data } = await axios.post('http://localhost:3200/user/login', form)
            if (data.token) {
                setLoggedIn(true)
                localStorage.setItem('token', data.token)
                setDataUser({
                    id: data.userLogged.id,
                    name: data.userLogged.name,
                    surname: data.userLogged.surname,
                    role: data.userLogged.role
                })
                Swal.fire({
                    icon: 'success',
                    title: data.message,
                })
                navigate('/home')
            }
            if (data.message == 'Check that all fields are complete') {
                Swal.fire({
                    icon: 'error',
                    title: data.message,
                })
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <div className="container t">
                <div className="row">
                    <div className="col">
                        <img src="https://i.pinimg.com/originals/94/18/6b/94186bcd2fadec05417f6a90b5ba15fc.png" alt="PEPPA PIG" style={{ width: '80%', height: '80%' }} />
                    </div>
                    <div className="card col" style={{ padding: '20px', margin: 'auto auto', marginBottom: '30px' }}>
                        <div className="card-body">
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                                    <form>
                                        <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <a className="nav-link active" id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab"
                                                    aria-controls="pills-login" aria-selected="true">Login</a>
                                            </li>
                                        </ul>
                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="loginName">Email or username</label>
                                            <input onChange={handleChange} id="loginName" name="email" className='form-control' type="text" />
                                        </div>
                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="loginPassword">Password</label>
                                            <input onChange={handleChange} id="loginPassword" name="password" className='form-control' type="password" />
                                        </div>
                                        <div className="row mb-4">
                                            <div className="col-md-6 d-flex justify-content-center">
                                                <a href="#!" >Forgot password?</a>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="a text-center'">
                                            <div className='a2'>
                                                <button onClick={(e) => login(e)} className="btn btn-primary btn-block mb-4">Sign in</button>
                                                <button onClick={() => navigate('/')} type="submit" className="btn btn-danger btn-block mb-4 ">Cancel</button>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <p>Not a member? <a href="#!" onClick={() => navigate('/register')}>Register</a></p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
        </>
    )
}