import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import './ApplyInfo.css';
const ApplyInfo = () => {
    const [applicantInfo, setApplicantInfo] = useState({});
    const { user } = useFirebase();
    const navigate = useNavigate();
    const handleOnChange = e => {
        const value = e.target.value;
        const field = e.target.name;
        let newApplicantInfo = { ...applicantInfo };
        newApplicantInfo[field] = value;
        setApplicantInfo(newApplicantInfo);
    }

    const handleApply = e => {
        e.preventDefault();
        console.log(applicantInfo);
        applicantInfo.status = "waiting";
        applicantInfo.name = user.displayName;
        applicantInfo.email = user.email;
        fetch("http://localhost:5000/applicants", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(applicantInfo)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    navigate("/submittedSuccess");
                }
                console.log(data)
            })
    }
    return (
        <div>

            <h3 className='mt-4 text-success'>Apply Form</h3>
            <hr width="20%" className="mx-auto" />
            <form onSubmit={handleApply} accept-charset="UTF-8" className="w-50 mx-auto text-start apply-form" enctype="multipart/form-data" target="_blank">
                <div class="form-group">
                    <label for="exampleInputName">Full Name</label>
                    <input onChange={handleOnChange} type="text" name="fullname" class="form-control mb-4 mb-4" id="exampleInputName" value={user.displayName} disabled />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1" required={true}>Email address</label>
                    <input onChange={handleOnChange} type="email" name="email" class="form-control mb-4" id="exampleInputEmail1" aria-describedby="emailHelp" value={user.email} disabled />
                </div>
                <div class="form-group">
                    <label for="input onChange={handleOnChange}Address">Address</label>
                    <input onChange={handleOnChange} type="text" name="address" class="form-control mb-4" id="input onChange={handleOnChange}Address" placeholder="1234 Main St" />
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="input onChange={handleOnChange}City">City</label>
                        <input onChange={handleOnChange} type="text" name="city" class="form-control mb-4" id="input onChange={handleOnChange}City" placeholder="Istanbul" />
                    </div>
                    <div class="form-group col-md-2">
                        <label for="input onChange={handleOnChange}Zip">Zip</label>
                        <input onChange={handleOnChange} type="text" name="zip" class="form-control mb-4" id="input onChange={handleOnChange}Zip" placeholder="34000" />
                    </div>
                </div>
                <div class="form-group">
                    <label for="example-tel-input onChange={handleOnChange}" class="col-2 col-form-label">Telephone</label>
                    <div class="col-10">
                        <input onChange={handleOnChange} class="form-control mb-4" name="tel" type="tel" placeholder="1-(555)-555-5555" id="example-tel-input onChange={handleOnChange}" />
                    </div>
                </div>
                <div class="form-group">

                    <div class="col-10">
                        <textarea onChange={handleOnChange} class="form-control mb-4" rows={10} cols={10} type="date" id="example-date-input onChange={handleOnChange}" placeholder='Cover Letter...' name="coverLetter" />
                    </div>
                </div>
                <div class="form-group">
                    <label for="example-date-input onChange={handleOnChange}" class="col-3 col-form-label">Start Date</label>
                    <div class="col-10">
                        <input onChange={handleOnChange} class="form-control mb-4" name="starting_date" type="date" id="example-date-input" />
                    </div>
                </div>
                <div class="form-group mt-3">
                    <label class="mr-4">Upload your CV?Resume</label>
                    <input onChange={handleOnChange} type="file" name="file" />
                </div>
                <button type="submit" className="btn-contact-submit">Apply</button>
            </form>
        </div>
    );
};

export default ApplyInfo;