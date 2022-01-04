import React, { useState } from 'react';
import './MakeAdmin.css';
const MakeAdmin = () => {
    const [email, setEmail] = useState("")

    const handleOnChange = e => {
        setEmail(e.target.value);
    }
    const handleMakingAdmin = e => {
        if (email) {
            fetch(`http://localhost:5000/users?email=${email}`, {
                method: "PUT"

            })
                .then(res => res.json())
                .then(data => {
                    if (data.matchedCount) {
                        alert(`${email} is now an admin`);
                        window.location.reload();
                    }
                })
        }


    }
    return (
        <div>
            <input type="email" style={{ backgroundColor: '#eee', border: "0px", outline: "0px", padding: '15px 30px', margin: "10px 0", borderRadius: "10px" }} placeholder='Enter Email' onChange={handleOnChange} required />
            <button className='btn-make-admin' onClick={handleMakingAdmin}>Make Admin</button>
        </div>
    );
};

export default MakeAdmin;