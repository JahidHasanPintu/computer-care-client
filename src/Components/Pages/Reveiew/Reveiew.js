
import './Reveiew.css';
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import avatar from '../../../assets/images/avatar.png'

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import {Pagination } from "swiper";
import useReview from '../../../hooks/useReview';

const Reveiew = () => {
    const [reviews] =useReview();
    return (
        <div className='slider-revews'>
            <>
            <h4 className='mt-5 mb-5 text-center text-2xl brand'>All Reviews</h4>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
                reviews?.map(review=>
                    <SwiperSlide>
                        <div class="card card-compact w-96 bg-base-100 shadow-xl mb-10">
                            <figure className='bg-accent'>
                                <div class="avatar p-3">
                                <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={avatar} alt='revew dp'/>
                                </div>
                                </div>
                            </figure>
                        <div class="card-body">
                        <h2 class="card-title text-primary">{review.name} </h2>
                        
                        <p>{review.review}</p>
                        <p className='text-secondary'>Ratings: {review.ratings} Star</p>
                        
                    </div>
                    </div>
                    </SwiperSlide>                                                         
                )
            }
        
        
      </Swiper>
    </>
        </div>
    );
};

export default Reveiew;