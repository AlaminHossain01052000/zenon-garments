import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import './MyOrders.css';
const MyOrders = () => {
    const [orders, setOrders] = useState({});
    const { user } = useAuth();
    useEffect(() => {
        fetch(`http://localhost:5000/orders/person?${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user.email])

    return (
        <>
            <h1 className='text-center text-success font-rubik mt-4'>My Orders</h1>
            <div className='my-order-list-container'>

                <ul className='my-order-list'>
                    <li>Order No:- {orders._id}</li>
                    <li>Payment Method:- {orders.type}</li>
                    <li>Shipping Address:- {orders.billing_details?.address?.postal_code}(Zip code)</li>
                    <li>Shipping Status:- {orders?.shipped ? "Shipped" : "Pending"}</li>
                </ul>
            </div>
        </>

    );
};

export default MyOrders;