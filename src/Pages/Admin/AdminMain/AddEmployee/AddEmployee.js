import React, { useState } from 'react';

const AddEmployee = () => {
    const [newEmployee, setNewEmployee] = useState({});
    const [address, setAddress] = useState("");
    const [tel, setTel] = useState("");
    const handleOnChange = e => {
        const value = e.target.value;
        const field = e.target.name;
        let newApplicantInfo = { ...newEmployee };
        newApplicantInfo[field] = value;
        setNewEmployee(newApplicantInfo);
    }
    const handleAddressSetting = e => {
        setAddress(e.target.value);
    }
    const handlePhoneSetting = e => {
        setTel(e.target.value);
    }
    const handleEmployeeAdding = e => {
        e.preventDefault();
        // newEmployee.address.city = address;
        newEmployee.address = { city: address, phone: tel };
        fetch("http://localhost:5000/employees", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newEmployee)
        })
    }
    return (
        <div>
            <form onSubmit={handleEmployeeAdding} accept-charset="UTF-8" className="w-50 mx-auto text-start" enctype="multipart/form-data" target="_blank">
                <div class="form-group">
                    <label for="exampleInputName">Full Name</label>
                    <input onChange={handleOnChange} type="text" name="name" class="form-control mb-4 mb-4" id="exampleInputName" placeholder="Enter your Name " required={true} />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1" required={true}>Email address</label>
                    <input onChange={handleOnChange} type="email" name="email" class="form-control mb-4" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email address" />
                </div>
                <div class="form-group">
                    <label for="example-id-input" class="col-2 col-form-label">Factory Id</label>
                    <div class="col-10">
                        <input onChange={handleOnChange} class="form-control mb-4" name="factoyId" type="factoyId" placeholder="0000-0000" id="example-factoyId-input" />
                    </div>
                </div>
                <div class="form-group">
                    <label for="exampleInputPositions">Position</label>
                    <input onChange={handleOnChange} type="text" name="position" class="form-control mb-4 mb-4" id="exampleInputPosition" placeholder="Position" required={true} />
                </div>

                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputCity">City</label>
                        <input onBlur={handleAddressSetting} type="text" name="city" class="form-control mb-4" id="inputCity" placeholder="Istanbul" />
                    </div>

                </div>
                <div class="form-group">
                    <label for="example-tel-input" class="col-2 col-form-label">Telephone</label>
                    <div class="col-10">
                        <input onChange={handleOnChange} class="form-control mb-4" name="phone" type="tel" placeholder="1-(555)-555-5555" id="example-tel-input" />
                    </div>
                </div>



                <button type="submit" className="btn-contact-submit">Add</button>
            </form>
        </div>
    );
};

export default AddEmployee;