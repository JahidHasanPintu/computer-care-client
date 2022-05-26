import React from 'react';

const BannerWithText = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src="https://thumbs.dreamstime.com/b/processor-chip-5356896.jpg" class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                <h1 class="text-5xl font-bold">Latest Processor!</h1>
                <p class="py-6">We made the most powerfull and new generation processor which can accelreate your pc speed into 2x</p>
                <button class="btn btn-primary">Explore Now</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default BannerWithText;