import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { ModalBuyProducts } from '../components/Modal/ModalBuyProducts'
import { SiberBar } from '../components/Sidebar/SiberBar'
import { TableProduct } from '../components/Tables/TableProduct'

export const BuyProductPage = () => {

    const [products, setProducts] = useState([{}])
    const [tableProducts, setTableProducts] = useState([{}])
    const [search, setSearch] = useState("")
    const [showModalProduct, setShowModalProduct] = useState(false)
    const [buyProduct, setBuyProduct] = useState({})

    const getTableProducts = async () => {
        try {
            const { data } = await axios('http://localhost:3200/product/get')
            setProducts(data.products)
            setTableProducts(data.products)
        } catch (e) {
            console.log(e);
        }
    }

    const handleChangeSearch = (e) => {
        setSearch(e.target.value)
        filtrar(e.target.value)
    }

    const filtrar = (searchTerm) => {
        var resultSearch = tableProducts.filter((elemento) => {
            if (elemento.name.toString().toLowerCase().includes(searchTerm.toLowerCase()))
                return elemento
        })
        setProducts(resultSearch)
    }

    const handleOpenModal = (id, name, price) => {
        let product = {
            id: id,
            name: name,
            price: price
        }
        setBuyProduct(product)
        setShowModalProduct(true)
    }

    const handleCloseModal = () => {
        setShowModalProduct(false)
    }

    useEffect(() => getTableProducts, [])

    return (
        <>
            <SiberBar />
            <nav className='navbar navbar-expand-lg navbar-light' style={{ marginTop: '6rem' }}>
                <div className='container-fluid'>
                    <div className='collapse navbar-collapse justify-content-center' id='navbarCenteredExample' >
                        <h1 className='text-black' style={{ fontSize: '2.5rem' }}>BUY PRODUCTS</h1>
                    </div>
                </div>
            </nav>
            <br />
            <div className="container t">
                <div className="row d-flex justify-content-center ">
                    <div className="a1">
                        <div className="search-box">
                            <div className="row1">
                                <input type="text" id='inputSearch' placeholder='Search' value={search} onChange={handleChangeSearch} />
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" fill="currentColor" className="bi bi-search bi-solid" viewBox="0 0 16 25">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <br />
            <section className="intro">
                <div className="bg-image h-100" style={{ backgroundColor: '#f5f7fa' }}>
                    <div className="mask d-flex align-items-center h-100">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-6">
                                    <div className="card">
                                        <div className="card-body p-0">
                                            <div className="table-responsive table-scroll" data-mdb-perfect-scrollbar="true" style={{ position: 'relative', height: '500px' }}>
                                                <table className="table table-striped">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col" className='text-white' style={{ backgroundColor: '#15297c' }}>Name</th>
                                                            <th scope="col" className='text-white' style={{ backgroundColor: '#15297c' }}>Price</th>
                                                            <th scope="col" className='text-white' style={{ backgroundColor: '#15297c' }}>Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            products.map(({ _id, name, price }, index) => {
                                                                return (
                                                                    <tr key={index}>
                                                                        <TableProduct
                                                                            name={name}
                                                                            price={price + '.00 Q'}
                                                                        ></TableProduct>
                                                                        <td className="text-center align-middle">
                                                                            <div className="btn-group align-top">
                                                                                <div className="btn btn-sm btn-primary btn-outline-secondary badge">
                                                                                    <button onClick={() => handleOpenModal(_id, name, price)} className="btn badge" type="button" data-toggle="modal" data-target="#user-form-modal">
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
                                                                                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                                                                        </svg>
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                )
                                                            })
                                                        }
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <br />
            <ModalBuyProducts isOpen={showModalProduct} onClose={handleCloseModal} id={buyProduct} />
        </>
    )
}
