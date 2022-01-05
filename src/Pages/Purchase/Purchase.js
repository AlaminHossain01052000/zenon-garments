import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckOutForm from '../CheckoutForm/CheckoutForm';
import './Purchase.css';

const stripePromise = loadStripe('pk_test_51Jw9W3E5xFZaa1U3H86kJC4fVBscEzCLGTVnJ2yEtb4vpS3t8UHPFDeSQFvdTVyn219Vt700fCSDOT5mxcmiRR6O00od455puL')

const Purchase = () => {
    const { id } = useParams();
    console.log(id);
    const [selected, setSelected] = useState({});
    useEffect(() => {
        fetch(`https://safe-sierra-40480.herokuapp.com/pricings/${id}`)
            .then(res => res.json())
            .then(data => setSelected(data))
    }, [id])
    return (
        <div>
            <h1 className='text-center my-3 font-roboto'>Payment For- {selected.planName}</h1>
            <h5 className='text-center mb-2 font-poppins'>Pay: $ {selected.price}</h5>
            <Elements stripe={stripePromise}>
                <CheckOutForm selected={selected} />
            </Elements>
        </div>
    );
};

export default Purchase;