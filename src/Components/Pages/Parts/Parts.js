import React from 'react';
import useCars from '../../../hooks/useCars';
import SinglePart from '../SinglePart/SinglePart';
import './Parts.css';

const Parts = () => {
    const [cars] =useCars();
    return (
        <div className='parts'>
             <h4 className='text-center brand'>All Parts</h4>
            <div className="part-container grid grid-cols-1 md:grid-cols-3">
            {
                cars?.map(car => <SinglePart
                
                    key= {car._id}
                    car={car}
                >

                </SinglePart>                                      
                ).slice(0,6)
            }
            </div>
            
           
        </div>
    );
};

export default Parts;