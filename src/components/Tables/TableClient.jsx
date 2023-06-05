import React from 'react'

export const TableClient = ({name, username, noAccount, DPI, adress, phone, email, password, work, salary, role}) => {
    return (
        <>
        <td>{name}</td>
        <td>{username}</td>
        <td>{noAccount}</td>
        <td>{DPI}</td>
        <td>{adress}</td>
        <td>{phone}</td>
        <td>{email}</td>
        <td>{password}</td>
        <td>{work}</td>
        <td>{salary}</td>
        <td>{role}</td>
        </>
    )
}
