import React from 'react';

const Summary = () => {
    return (
        <div>
            <h2 className='text-2xl text-center mt-10'>Business Summary</h2>
        <div className="flex justify-center">
            
            <div class="mt-5 stats shadow mb-3">
  
                <div class="stat place-items-center">
                    <div class="stat-title">Custmers</div>
                    <div class="stat-value">31K</div>
                    <div class="stat-desc">From January 1st to February 1st</div>
                </div>
                
                <div class="stat place-items-center">
                    <div class="stat-title">Revenue</div>
                    <div class="stat-value text-secondary">1,20M</div>
                    <div class="stat-desc text-secondary">↗︎ 40 (2%)</div>
                </div>
                
                <div class="stat place-items-center">
                    <div class="stat-title">Reviews</div>
                    <div class="stat-value">200+</div>
                    <div class="stat-desc">↘︎ 90 (14%)</div>
                </div>

                <div class="stat place-items-center">
                    <div class="stat-title">Parts</div>
                    <div class="stat-value text-secondary">90+</div>
                    <div class="stat-desc text-secondary">↗︎ 40 (2%)</div>
                </div>
                
                <div class="stat place-items-center">
                    <div class="stat-title">New Registers</div>
                    <div class="stat-value">1,200</div>
                    <div class="stat-desc">↘︎ 90 (14%)</div>
                </div>
                
                </div>
        </div>
        </div>
    );
};

export default Summary;