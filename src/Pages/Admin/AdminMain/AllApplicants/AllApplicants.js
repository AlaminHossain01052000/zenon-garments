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

            <table className='mx-auto my-5'>
                <thead>
                    <tr>
                        <th style={{ backgroundColor: "#ff6b6b", border: "2px solid #222f3e" }} className="fw-bold text-white p-3 font-poppins">Date</th>
                        <th style={{ backgroundColor: "#ff6b6b", border: "2px solid #222f3e" }} className="fw-bold text-white p-3 font-poppins">Email</th>

                        <th style={{ backgroundColor: "#ff6b6b", border: "2px solid #222f3e" }} className="font-poppins fw-bold text-white p-3">Status</th>
                        <th style={{ backgroundColor: "#ff6b6b", border: "2px solid #222f3e" }} className="font-poppins fw-bold text-white p-3">Action</th>

                    </tr>
                </thead>
                <tbody>
                    {applicants.map(applicant =>

                        <tr>
                            <td style={{ backgroundColor: "#0abde3", color: "#222f3e", border: "2px solid black" }} className="fw-bold p-2 font-roboto">{applicant.starting_date}</td>
                            <td style={{ backgroundColor: "#0abde3", color: "#222f3e", border: "2px solid black" }} className="fw-bold p-2 font-roboto">{applicant.email}</td>
                            <td style={{ backgroundColor: "#0abde3", color: "#222f3e", border: "2px solid black" }} className="fw-bold p-2 font-roboto">{applicant.status}</td>
                            <td style={{ backgroundColor: "#0abde3", color: "#222f3e", border: "2px solid black" }}
                                className="p-2"
                            ><button className='btn btn-warning text-white fw-bold' onClick={() => handleChageStatus(applicant._id)}>Book</button></td>


                        </tr>
                    )}
                </tbody>
            </table>

        </div>
    );
};

export default AllApplicants;