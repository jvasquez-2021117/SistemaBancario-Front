import React from 'react'

export const TableDeposit = ({ accountReq, amount, accountReq2, date }) => {
    return (
        <>
            <td>{accountReq}</td>
            <td>{accountReq2}</td>
            <td>{amount}</td>
            <td>{date}</td>
        </>
    )
}
