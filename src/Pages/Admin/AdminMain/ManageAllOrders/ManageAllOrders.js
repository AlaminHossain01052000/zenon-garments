import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/orders")
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [orders])
    console.log(orders);
    const handleChageStatus = (id) => {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: "PUT"
        }).then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div>
            <table className='mx-auto my-5'>
                <thead>
                    <tr>
                        <th style={{ backgroundColor: "#341f97", border: "2px solid #222f3e" }} className="fw-bold text-white p-3 font-poppins">Order NO</th>
                        <th style={{ backgroundColor: "#341f97", border: "2px solid #222f3e" }} className="fw-bold text-white p-3 font-poppins">Email Address</th>
                        <th style={{ backgroundColor: "#341f97", border: "2px solid #222f3e" }} className="fw-bold text-white p-3 font-poppins">Location Postal Code</th>

                        <th style={{ backgroundColor: "#341f97", border: "2px solid #222f3e" }} className="font-poppins fw-bold text-white p-3">Payment Method</th>
                        <th style={{ backgroundColor: "#341f97", border: "2px solid #222f3e" }} className="font-poppins fw-bold text-white p-3">Status</th>
                        <th style={{ backgroundColor: "#341f97", border: "2px solid #222f3e" }} className="font-poppins fw-bold text-white p-3">Action</th>

                    </tr>
                </thead>
                <tbody>
                    {orders.map(order =>

                        <tr>
                            <td style={{ backgroundColor: "#0abde3", color: "#222f3e", border: "2px solid black" }} className="fw-bold p-2 font-roboto">{order._id}</td>
                            <td style={{ backgroundColor: "#0abde3", color: "#222f3e", border: "2px solid black" }} className="fw-bold p-2 font-roboto">{order.email}</td>
                            <td style={{ backgroundColor: "#0abde3", color: "#222f3e", border: "2px solid black" }} className="fw-bold p-2 font-roboto">{order?.billing_details.address?.postal_code}</td>
                            <td style={{ backgroundColor: "#0abde3", color: "#222f3e", border: "2px solid black" }} className="fw-bold p-2 font-roboto">{order.type}</td>
                            <td style={{ backgroundColor: "#0abde3", color: "#222f3e", border: "2px solid black" }} className="fw-bold p-2 font-roboto">{order?.shipped ? "shipped" : "Unshipped"}</td>
                            <td style={{ backgroundColor: "#0abde3", color: "#222f3e", border: "2px solid black" }}
                                className="p-2"
                            >{order?.shipped ?
                                <button className='btn btn-success text-white fw-bold' disabled>Already Shipped</button> :
                                <button className='btn btn-warning text-white fw-bold' onClick={() => handleChageStatus(order._id)}>Send For Delivery</button>}
                            </td>


                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ManageAllOrders;