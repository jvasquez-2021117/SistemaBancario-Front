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
            <div className="split-screen a b">
                <div className="left">
                    <section className="copy">
                        <h1>CashTrust</h1>
                        <p>Sintema Bancario</p>
                    </section>
                </div>
                <div className="right">
                    <form action="">
                        <section className="copy">
                            <h2>Login</h2>
                            <div className="login-container">
                            </div>
                        </section>
                        <div className="input-container name">
                            <label htmlFor="name">Email / Username</label>
                            <input type="text" id='name' name='name' />
                        </div>
                        <div className="input-container password">
                            <label htmlFor="password">Password</label>
                            <input type="password" id='password' name='password' />
                        </div>
                        <button className="signin-btn" type='submit'>SignIn</button>
                        <section className="copy legal">
                            <p><span className="small">By continuing, you agree to accept our <br />
                                <a href="#">Privacy Policy </a>
                                &amp;
                                <a href="#"> Terms of Services</a>.
                            </span></p>
                        </section>
                    </form>
                </div>
            </div>
        </>
    )
}