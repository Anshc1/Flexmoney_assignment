
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const CardDetailsForm = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [email, setemail] = useState("")
    const [errors, setErrors] = useState({});
    useEffect(() => {
        if (location.state !== null) {
            setemail(location.state.email);
        }
        if (location.state === null || location.state.email === "") {
            navigate('/admissionform');
        }
    }, [])

    const [cardDetails, setCardDetails] = useState({
        type: 2,
        email: email,
        amount: 500,
        cardNumber: '',
        expirationDate: '',
        cvv: '',
        pin: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'cvv' && !/^\d{0,3}$/.test(value)) {
            setErrors((prevErrors) => ({ ...prevErrors, [name]: 'CVV must be a 3-digit number' }));
        } else if (name === 'expirationDate' && !/^(0[1-9]|1[0-2])\/\d{2}$/.test(value)) {
            setErrors((prevErrors) => ({ ...prevErrors, [name]: 'Expiration Date must be in MM/YY format' }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, [name]: undefined }));
        }
        setCardDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (Object.values(errors).some((error) => error !== undefined)) {
            console.log('Form has validation errors. Please correct them.');
            return;
        }
        console.log('Card details submitted:', cardDetails);
        try {
            const response = await fetch('http://localhost:5000/PaymentGateway', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(cardDetails),
            });

            const resp = await response.json();
            console.log(resp.status);
            alert(resp.status);
            if (response.ok) {
                navigate('/admissionform')
            }
        } catch (error) {
            alert('Error submitting form:')
        }
    };


    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                flexDirection: 'column'
            }}
        >
            <h1>
                PaymentForm
            </h1>
            <form
                onSubmit={handleSubmit}
                style={{
                    width: '300px',
                    padding: '20px',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                }}
            >
                <label>
                    Email:
                    <input
                        type="text"
                        name="Email"
                        value={email}
                        onChange={handleInputChange}
                        style={{ width: '100%', marginBottom: '10px', padding: '5px' }}
                        disabled
                    />
                </label>
                <label>
                    Amount:
                    <input
                        type="number"
                        name="Amount"
                        value={cardDetails.amount}
                        onChange={handleInputChange}
                        style={{ width: '100%', marginBottom: '10px', padding: '5px' }}
                        required
                        disabled
                    />
                </label>
                <label>
                    Card Number:
                    <input
                        type="text"
                        name="cardNumber"
                        value={cardDetails.cardNumber}
                        onChange={handleInputChange}
                        style={{ width: '100%', marginBottom: '10px', padding: '5px' }}
                        required
                    />
                </label>

                <label>
                    Expiration Date:
                    <input
                        type="text"
                        name="expirationDate"
                        value={cardDetails.expirationDate}
                        onChange={handleInputChange}
                        placeholder="MM/YY"
                        style={{ width: '100%', marginBottom: '10px', padding: '5px' }}
                        required
                    />
                    {errors.expirationDate && <span style={{ color: 'red' }}>{errors.expirationDate}</span>}
                </label>
                <br />
                <label>
                    CVV:
                    <input
                        type="text"
                        name="cvv"
                        value={cardDetails.cvv}
                        onChange={handleInputChange}
                        style={{ width: '100%', marginBottom: '10px', padding: '5px' }}
                        required
                    />
                    {errors.cvv && <span style={{ color: 'red' }}>{errors.cvv}</span>}
                </label>
                <br />
                <label>
                    PIN:
                    <input
                        type="password"
                        name="pin"
                        value={cardDetails.pin}
                        onChange={handleInputChange}
                        style={{ width: '100%', marginBottom: '10px', padding: '5px' }}
                        required
                    />
                </label>

                <button
                    type="submit"
                    style={{ width: '100%', backgroundColor: '#4CAF50', color: 'white', padding: '10px', border: 'none' }}
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default CardDetailsForm;
