import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SinglePart.css';

const SinglePart = (props) => {
    const {_id,name,quantity,img,description,price,minimum}=props.car;
    // console.log(props.car);
    const navigate = useNavigate();
    const navigateToUpdate = id =>{
        navigate(`/inventory/${id}`);
    }
    return (
        <div className="flex justify-center">
            {/* <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>Price: ${price}</h5>
            <h6 className='price-quan'>Minimum Order:{minimum} <span>Quantity: {quantity}</span></h6>
            <p>{description.substr(0,250)}....</p>
            <div onClick={()=> navigateToUpdate(_id)} className="bg-buy-plan">
                <span  className="title4">Purchase</span>
            </div> */}

            <div class="mb-5 card w-96 bg-base-100 shadow-xl">
            <figure className='single-pic'><img src={img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">
                {name}
                <div class="badge badge-secondary">NEW</div>
                </h2>
                <p>{description.substr(0,200)}....</p>
                <div class="card-actions justify-end">
                <div class="badge badge-outline text-red-600">${price}</div> 
                <div onClick={()=> navigateToUpdate(_id)}  class="badge badge-outline bg-primary cursor-pointer">Purchase</div>
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default SinglePart;