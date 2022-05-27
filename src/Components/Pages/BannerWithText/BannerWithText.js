import React from 'react';
import processor from '../../../assets/images/processor.jpg';

const BannerWithText = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={processor} class="sm:max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                <h1 class="text-5xl font-bold">Latest Processor!</h1>
                <p class="py-6">We made the most powerfull and new generation processor which can accelreate your pc speed into 2x desktop PC processor is considered the world's fastest CPU in 2021. The CPU features a 2.9 GHz base clock and a 4.3 GHz max boost clock that facilitates multitasking and fast load times.</p>
                <button class="btn btn-primary">Explore Now</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default BannerWithText;