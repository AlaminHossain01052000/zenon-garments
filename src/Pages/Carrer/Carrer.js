import React from 'react';
import './Carrer.css';

const Carrer = () => {
    return (
        <div className='mt-5'>
            <h1>Apply Now</h1>
            <form className='my-5'>
                <div className='w-50 mx-auto'>
                    <div class="mb-3">
                        <label for="exampleInputName" class="form-label">First Name</label>
                        <input type="name"
                            class="form-control"
                            name='name'
                        />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputName" class="form-label">Last Name</label>
                        <input type="name"
                            class="form-control"
                            name='name'
                        />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email"
                            class="form-control"
                            name='email'
                        />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Attach Your Resume</label>
                        <input type="file"
                            class="form-control"
                        />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Address</label>
                        <input type="text"
                            class="form-control"
                        />
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default Carrer;