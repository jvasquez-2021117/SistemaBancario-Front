import React from 'react'
import { useState } from 'react'
import { SiberBar } from '../components/Sidebar/SiberBar'
import { Index } from '../Index'
import { TableAccountProfile } from '../components/Tables/TableAccountProfile'
import axios from 'axios'
import { useEffect } from 'react'

export const ProfileAccountsPage = () => {

    const [tableProfileAccount, setTableProfileAccount] = useState([{}])
    const [tableUser, setTableUser] = useState([{}])

    const getTableAccountProfile = async () => {
        try {
            const { data } = await axios('http://localhost:3200/account/get')
            setTableProfileAccount(data.accounts)
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => getTableAccountProfile, [])

    return (
        <>
            <SiberBar />
            <nav className='navbar navbar-expand-lg navbar-light' style={{ marginTop: '6rem' }}>
                <div className='container-fluid'>
                    <div className='collapse navbar-collapse justify-content-center' id='navbarCenteredExample' >
                        <h1 className='text-black' style={{ fontSize: '2.5rem' }}>My accounts</h1>
                    </div>
                </div>
            </nav>
            <br /><br />
            {
                tableProfileAccount.map(({ _id, user, balances, state, typeAccount }, index) => {
                    return (
                        <div key={index}>
                            <TableAccountProfile
                                _id={_id}
                                user={user?.name}
                                balances={balances}
                                state={state}
                                typeAccount={typeAccount?.name}
                            ></TableAccountProfile>
                        </div>
                    )
                })
            }

        </>
    )
}
