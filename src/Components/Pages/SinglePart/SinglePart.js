import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SinglePart.css';

const SinglePart = (props) => {
    const {_id,name,quantity,img,description,price,supplier}=props.car;
    const navigate = useNavigate();
    const navigateToUpdate = id =>{
        navigate(`/inventory/${id}`);
    }
    return (
        <div className='part '>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>Brand: {supplier}</h5>
            <h6 className='price-quan'>Price: ${price} <span>Quantity: {quantity}</span></h6>
            <p>{description.substr(0,250)}....</p>
            <div onClick={()=> navigateToUpdate(_id)} className="bg-buy-plan">
                <span  className="title4">Update</span>
            </div>
            
        </div>
    );
};

export default SinglePart;