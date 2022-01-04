import React, { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Header from '../Header/header';
import './Pricing.css';

const Pricing = () => {
    const [pricings, setPricings] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/pricings")
            .then(res => res.json())
            .then(data => setPricings(data))
    }, [])

    return (
        <>
            <Header></Header>
            <div className='pricing-container mt-5 text-center'>

                {
                    pricings.map(pricing => <div className='basic-plan-container'>
                        <h4>{pricing.planName}</h4>
                        <h2>${pricing.price}</h2>
                        <p><i class="far fa-check-circle me-3"></i>{pricing.list1}</p>
                        <p><i class="far fa-check-circle me-3"></i>{pricing.list2}</p>
                        <p><i class="far fa-check-circle me-3"></i>{pricing.list3}</p>
                        <p>{pricing.list4 ? <i class="far fa-check-circle me-3"></i> : <></>}{pricing?.list4}</p>
                        <p>{pricing.list5 ? <i class="far fa-check-circle me-3"></i> : <></>}{pricing?.list5}</p>


                        <Link className='btn btn-success' to={`/purchase/${pricing._id}`}>Purchase</Link>
                    </div>)
                }
            </div>


        </>

    );
};

export default Pricing;