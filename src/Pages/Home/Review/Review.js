import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import './Review.css';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import './Review.css';



// import Swiper core and required modules
import SwiperCore, {
    Pagination
} from 'swiper';
import Rating from 'react-rating';

// install Swiper modules
SwiperCore.use([Pagination]);
const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("https://safe-sierra-40480.herokuapp.com/reviews")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    console.log(reviews);
    return (
        <div className='w-50 mx-auto review-slot'>

            <Swiper pagination={true} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide>
                        <div style={{ marginBottom: "20px" }}>
                            <h3 className='text-center font-roboto'>{review.displayName}</h3>
                            <h4 className='text-center font-roboto'>{review.email}</h4>
                            <hr style={{ border: "2px solid #0abde3", width: "30%", boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" }} className='mx-auto' />
                            <p className="mb-3 font-spline text-center mt-3">"{review.description}"</p>


                            <Rating
                                emptySymbol={<i href="#icon-star-empty" className="far fa-star" />}
                                fullSymbol={<i href="#icon-star-full" className="fas fa-star" />}
                                initialRating={review.review}
                                readonly
                                className='d-flex justify-content-center alogn-items-center mb-5'
                                style={{ color: "#0abde3" }}
                            />

                        </div>

                    </SwiperSlide>)


                }

            </Swiper>
        </div>




    );
};

export default Review;