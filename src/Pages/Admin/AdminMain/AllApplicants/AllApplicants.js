import React, { useEffect, useState } from 'react';

const AllApplicants = () => {
    const [applicants, setApplicants] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/applicants")
            .then(res => res.json())
            .then(data => setApplicants(data))
    }, [applicants])
    const handleChageStatus = (id) => {
        fetch(`http://localhost:5000/applicants/${id}`, {
            method: "PUT"


        }).then()
    }
    return (
        <div>
            {
                applicants.map(applicant => <>
                    <li>{applicant.email}</li>
                    <li>{applicant.status}</li>
                    <button onClick={() => handleChageStatus(applicant._id)} className='btn btn-success'>Book for interview</button>
                </>)
            }
            <h1>Hell</h1>
        </div>
    );
};

export default AllApplicants;