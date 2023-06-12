import React from 'react'

export const TableDeposit = ({ accountReq, amount, date }) => {
    return (
        <>
            <td>{accountReq}</td>
            <td>{amount}</td>
            <td>{date}</td>
        </>
    )
}
