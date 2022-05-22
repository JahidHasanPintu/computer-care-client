
import './Reveiew.css';
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import {Pagination } from "swiper";

const Reveiew = () => {
    return (
        <div className='App slider-revews'>
            <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div class="card card-compact w-96 bg-base-100 shadow-xl">
                <figure className='bg-accent'>
                    <div class="avatar p-3">
                    <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://api.lorem.space/image/face?hash=3174" />
                    </div>
                    </div>
                </figure>
            <div class="card-body">
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
            <div class="card card-compact w-96 bg-base-100 shadow-xl">
                <figure className='bg-accent'>
                    <div class="avatar p-3">
                    <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://api.lorem.space/image/face?hash=3174" />
                    </div>
                    </div>
                </figure>
            <div class="card-body">
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
            <div class="card card-compact w-96 bg-base-100 shadow-xl">
                <figure className='bg-accent'>
                    <div class="avatar p-3">
                    <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://api.lorem.space/image/face?hash=3174" />
                    </div>
                    </div>
                </figure>
            <div class="card-body">
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            
        </div>
        </div>
        </SwiperSlide>
        
        
      </Swiper>
    </>
        </div>
    );
};

export default Reveiew;