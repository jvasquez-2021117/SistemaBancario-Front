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
            <br /><br /><br /><br /><br /><br /><br /><br />
            <h1>Vista de Cuentas</h1>
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
