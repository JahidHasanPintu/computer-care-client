import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import useInventory from '../../../hooks/useInventory';
import Loading from '../Shared/Loading/Loading';



import './Inventory.css';

const Inventory = () => {
    const {inventoryID}=useParams();


    const [loading, setLoading] = useState(false);

    // Loadinf single car by id 
    const [cars,setCars] = useInventory(inventoryID);

    const [quantity1,setQuantity]=useState(1);
    

    const {_id,name,img,description,price,supplier,ratings,quantity,sold}=cars;
    const preQuantity= quantity;
    const preSold = sold;
    // console.log(preQuantity);

    // Updating quantity
    const quantityRef = useRef('');
    const handleUpdateCars = event =>{
        event.preventDefault();
        const inputQuan= parseInt(quantityRef.current.value );
        const quantity = inputQuan + parseInt(preQuantity);
        const sold = parseInt(preSold);
        // for fron end show 
        
        const updatedCars = {quantity,sold};
        if(inputQuan>0&& inputQuan != null){
        cars.quantity = parseInt(quantityRef.current.value ) + parseInt(cars.quantity);
            // send data to the server
        setLoading(true);
        const url = `https://secure-cliffs-70594.herokuapp.com/cars/${inventoryID}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCars)
        })
        .then(res => res.json())
        .then(data =>{
            console.log('success', data);
            alert('Stock updated successfully!!!');
            // event.target.reset();
            setLoading(false);
            
            
        })
        }else{
            alert('enter valid quantity');
        }
        
    }

   
    // updating delivered button 
    const handleDeliveredCars = event =>{
        event.preventDefault();
        
        const quantity = parseInt(preQuantity)-1;
        const sold = parseInt(preSold)+1;
        cars.quantity = cars.quantity-1;
        const newQuantity=cars.quantity;
        setQuantity(newQuantity);
        console.log(quantity1);
        cars.sold = cars.sold+1;
        const newSold= cars.sold;
        // console.log('getting sold: ',sold);

        const updatedCars = {quantity,sold};
        console.log(updatedCars);

        // send data to the server
        setLoading(true);
        const url = `https://secure-cliffs-70594.herokuapp.com/cars/${inventoryID}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCars)
        })
        .then(res => res.json())
        .then(data =>{
            window.location.reload();
            console.log('success', data);          
            alert('Delivered successfully!!!');
           
            setLoading(false);
            // event.target.reset();
            
        })
    }






    return (
        <>
            {
            loading ? <Loading></Loading> : <div>
            
            <div className="card-wrapper">
                <div className="card">
                {/* card left side or image side  */}
                
                <div class="form-control">
                <h2 className= "product-title">Order Form</h2>
                    <label class="input-group input-group-sm mt-2">
                        <span>Name</span>
                        <input type="text" placeholder="Type here" class="input input-bordered input-sm" />
                    </label>
                    <label class="input-group input-group-sm mt-2">
                        <span>Email</span>
                        <input type="text" placeholder="Type here" class="input input-bordered input-sm" />
                    </label>
                    <label class="input-group input-group-sm mt-2">
                        <span>Mobile</span>
                        <input type="text" placeholder="Type here" class="input input-bordered input-sm" />
                    </label>
                    <label class="input-group input-group-sm mt-2">
                        <span>Address</span>
                        <input type="text" placeholder="Type here" class="input input-bordered input-sm" />
                    </label>
                    <label class="input-group input-group-sm mt-2 mb-3">
                        <span>Quantity</span>
                        <input type="number" placeholder="Type here" class="input input-bordered input-sm" />
                    </label>
                    <button class="btn btn-active">Complete Order</button>
                    </div>
                
                {/* Card Right Side  */}
                <div className= "product-content">
                    <h2 className= "product-title">{name}</h2>
                    {/* <a href = "#" className= "product-link">{supplier}</a> */}
                    <div className= "product-imgs">
                <div className= "img-display">
                    <div className= "img-showcase">
                    
                    <img src = {img} alt = "car img"/>
                    
                    </div>
                </div>
                
                </div>

                    <div className= "product-price">
                        
                        <p className= "quantity">Quantity: <span>{cars.quantity}</span>  Price: <span>${price}</span></p>
                        {
                            quantity1 <= 0 ? <p className='quantity'>Sold Out</p> : ''
                        }
                        
                        
                    </div>

                    <div className= "product-detail">
                        <h2>About {name} </h2>
                        <p>{description}</p>
                        
                        
                    </div>

                    {/* <div className= "purchase-info">
                        <input type = "number" ref={quantityRef} placeholder='0'/>
                        <button type = "button" onClick={handleUpdateCars} className= "product-button">Restock </button>
                        <button type = "button" onClick={handleDeliveredCars} className= "product-button">Delivered</button>
                    </div> */}

                
                </div>
                </div>
            </div>
        </div>
        }
        </>
        
        
    );
};

export default Inventory;