import React from 'react';
import { Link } from 'react-router-dom';

const SuccessfullyApplied = () => {
    return (
        <div>
            <h2 className='text-success mt-5'>Your Application Is Submitted Successfully!</h2>
            <Link to="/home">
                <i title="Home" class="fas fa-arrow-left bg-red fs-5 text-success mb-5"></i>

            </Link>
        </div>
    );
};

export default SuccessfullyApplied;