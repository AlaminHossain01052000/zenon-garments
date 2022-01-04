import React, { useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import './AddReview.css';
const AddReview = () => {
    const [review, setReview] = useState({});

    const { user } = useAuth();
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        let newReview = { ...review };
        newReview[field] = value;
        setReview(newReview);
    }

    const handleAddingReview = e => {
        e.preventDefault();
        review.displayName = user.displayName;
        review.email = user.email;
        console.log(review);
        fetch("http://localhost:5000/reviews", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(review)
        }).then(res => res.json())
            .then(data => {
                if (data) {
                    alert("Review Added Done !");
                }
            })

    }
    return (
        <div className='d-flex justify-content-center align-items-center flex-column'>
            <img src="https://i.ibb.co/mqfxtpC/download-2-removebg-preview.png" alt="" />
            <form onSubmit={handleAddingReview} className="add-review-form">
                <input type="text" defaultValue={user.displayName} disabled style={{ color: "blue", backgroundColor: "rgba(0,0,0,0.5)" }} />
                <input type="text" defaultValue={user.email} disabled style={{ color: "blue", backgroundColor: "rgba(0,0,0,0.5)" }} />
                <textarea type="text" placeholder="Description" onChange={handleOnChange} name="description" rows="6" required />
                <input type="text" onChange={handleOnChange} placeholder="Your Company's Name" required></input>
                <input type="text" onChange={handleOnChange} name="post" placeholder="Your Post in that company" required></input>
                <select name="review" id="review" onChange={handleOnChange} required>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <input className="btn-review" type="submit" value="Add Review" style={{ cursor: "pointer" }} />
            </form>
        </div>
    );
};

export default AddReview;