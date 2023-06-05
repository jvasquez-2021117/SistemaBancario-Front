import React from 'react'

export const AddClient = () => {
    return (
        <>
            <div className="mother">
                <div className="container1">
                    <div className="title">
                        <p>Registration</p>
                    </div>
                    <form action="#">
                        <div className="user_details">
                            <div className="input_box">
                                <label htmlFor="name">Full Name</label>
                                <input type="text" id="name" placeholder="Enter your name" required />
                            </div>
                            <div className="input_box">
                                <label htmlFor="username">Username</label>
                                <input type="text" id="username" placeholder="Enter your username" required />
                            </div>
                            <div className="input_box">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" placeholder="Enter your email" required />
                            </div>
                            <div className="input_box">
                                <label htmlFor="phone">Phone Number</label>
                                <input type="number" id="phone" placeholder="Enter your number" required />
                            </div>
                            <div className="input_box">
                                <label htmlFor="account">No.Account</label>
                                <input type="number" id="account" placeholder="Enter your No.Account" required />
                            </div>
                            <div className="input_box">
                                <label htmlFor="dpi">DPI</label>
                                <input type="number" id="dpi" placeholder="Enter your DPI" required />
                            </div>
                            <div className="input_box">
                                <label htmlFor="work">Name work</label>
                                <input type="text" id="work" placeholder="Enter your work" required />
                            </div>
                            <div className="input_box">
                                <label htmlFor="pass">Password</label>
                                <input type="password" id="pass" placeholder="Enter your password" required />
                            </div>
                            <div className="textarea_box" style={{width: '100%'}}>
                                <label htmlFor="address">Address</label>
                                <textarea name="address" id="address" placeholder='Enter your Address' />
                            </div>
                        </div>
                        <div className="reg_btn">
                            <input type="submit" value="Register" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
