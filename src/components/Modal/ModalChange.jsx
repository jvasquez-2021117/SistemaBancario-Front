import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'


export const ModalChange = ({ isOpen, onClose, datos }) => {
    const [rates, setRates] = useState({});
    const [baseCurrency, setBaseCurrency] = useState('GTQ');
    /* const [amount, setAmount] = useState(0); */
    const [convertedAmount, setConvertedAmount] = useState(0);

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await axios.get(
                    `https://api.exchangerate-api.com/v4/latest/${baseCurrency}`
                );
                setRates(response.data.rates);
            } catch (error) {
                console.log(error);
            }
        };
        fetchRates();
    }, [baseCurrency]);

    /* const handleAmountChange = (e) => {
        setAmount(e.target.value);
    }; */

    const handleConvert = () => {
        const rate = rates['USD']; // Obtén la tasa de cambio para la moneda objetivo (ejemplo: EUR)
        const rate2 = rates['EUR']; // Obtén la tasa de cambio para la moneda objetivo (ejemplo: EUR)
        /* baseCurrency == 'EUR':  */
        if (baseCurrency == 'EUR') {
            const converted = datos.balances * rate2;
            setConvertedAmount(converted);
        }
        const converted = datos.balances * rate;
        setConvertedAmount(converted);
    };

    if (!isOpen) {
        return null
    }
    return (
        <>
            <Modal show={isOpen}>
                <Modal.Header>
                    <Modal.Title className='text-dark'>Currency Converter</Modal.Title>
                    <button onClick={onClose} type="button" className="btn" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                        <div className="row mt-5">
                            <div className="col-md-6 offset-md-3">
                                {/* <h2 className="text-center mb-4">Currency Converter</h2> */}
                                <div className="mb-3">
                                    <label htmlFor="baseCurrency" className="form-label">
                                        Base Currency
                                    </label>
                                    <select id="baseCurrency" className="form-select" value={baseCurrency} onChange={(e) => setBaseCurrency(e.target.value)}>
                                        <option value="GTQ">USD</option>
                                        <option value="EUR">EUR</option>
                                        <option value="USD">GTQ</option>
                                        {/* Agrega más opciones según tus necesidades */}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="amount" className="form-label">
                                        Amount
                                    </label>
                                    <input type="number" id="amount" className="form-control" value={datos.balances} /* onChange={handleAmountChange} */ />
                                </div>
                                <div className="text-center">
                                    <button className="btn btn-primary" onClick={handleConvert}>
                                        Convert
                                    </button>
                                </div>
                                <p className="text-center mt-3">
                                    Result: {convertedAmount.toFixed(2)} {baseCurrency}
                                </p>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}
