import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Index';
import { ModalFavorite } from '../components/Modal/ModalFavorite';
import { TableFavorites } from '../components/Tables/TableFavorites';

export const FavoritPage = () => {

    const [tableFavorites, setTableFavorites] = useState([{}])
    const [showModalFav, setShowModalFav] = useState(false)
    const { dataUser } = useContext(AuthContext);

    const getTableFavorites = async () => {
        try {
            const { data } = await axios(`http://localhost:3200/favorite/getById/${dataUser.id}`)
            setTableFavorites(data.favorites)
        } catch (e) {
            console.log(e);
        }
    }

    const handleOpenModal = () => {
        setShowModalFav(true);
    }
    const handleCloseModal = () => {
        setShowModalFav(false);
    }

    useEffect(() => getTableFavorites, [])

    return (
        <>
            <nav className='navbar navbar-expand-lg navbar-light' style={{ marginTop: '6rem' }}>
                <div className='container-fluid'>
                    <div className='collapse navbar-collapse justify-content-center' id='navbarCenteredExample' >
                        <h1 className='text-black' style={{ fontSize: '2.5rem' }}>Accounts Favorites</h1>
                    </div>
                </div>
            </nav>
            <div className="a1">
                <div className="search-box">
                    <div className="row1">
                        <input type="text" id='inputSearch' placeholder='Search' />
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" fill="currentColor" className="bi bi-search bi-solid" viewBox="0 0 16 25">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="reg_btn">
                <div className="row">
                    <div className="col">
                    </div>
                    <div className="col">
                        <button type='button' onClick={handleOpenModal} className='btn btn-primary' style={{ backgroundColor: '#2c4893' }}>ADD FAVOTIRE</button>
                    </div>
                    <div className="col">
                    </div>
                </div>
            </div>
            {
                tableFavorites.map(({ _id, nickName, accountFav }, index) => {
                    return (
                        <div key={index}>
                            <TableFavorites
                                nickName={nickName}
                                accountFav={accountFav}
                            ></TableFavorites>
                        </div>
                    )
                })
            }
            <ModalFavorite isOpen={showModalFav} onClose={handleCloseModal} />
        </>
    )
}
