import React from 'react'

export const TableTransfer = ({ accountReq, accountSender, amount, date, description }) => {
    return (
        <>
            <td>{accountReq}</td>
            <td>{accountSender}</td>
            <td>{amount}</td>
            <td>{date}</td>
            <td>{description}</td>
        </>
    )
}
