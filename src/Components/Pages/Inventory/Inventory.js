import { isDisabled } from '@testing-library/user-event/dist/utils';
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useInventory from '../../../hooks/useInventory';
import Loading from '../Shared/Loading/Loading';
import './Inventory.css';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const Inventory = () => {
    const {inventoryID}=useParams();
    const [loading, setLoading] = useState(false);
    const [user, loading2] = useAuthState(auth);
    // Loadinf single car by id 
    const [cars,setCars] = useInventory(inventoryID);
    const [quantity1,setQuantity]=useState(1);
    const {_id,name,img,description,price}=cars;
//    Submiting form 
    const handleSubmit=event=>{
        event.preventDefault();
        const partsData= {
            //  name:event.target.name.value,
            //  email:event.target.email.value,
            //  quantity:event.target.quantity.value,
            //  mobile:event.target.mobile.value,
            //  address:event.target.address.value,

            productId: cars._id,
            product: cars.name,
            customerName: user?.displayName,
            customerEmail: user?.email,
            adress: event.target.address.value,
            phone: event.target.mobile.value,
            pricePerUnit: cars.price,
            orderQuantity: event.target.quantity.value
             

        }
        
        console.log(partsData);

        const url= `https://computer-care.herokuapp.com/part`;
        fetch(url,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(partsData)
        })
        .then(res=>res.json())
        .then(result =>{
            console.log(result);
            
            toast('Order completed successfully');
        })
    }


    // Disabling quantity with condition 
    const initialQuantity = 50;
    const [buttonDisabled,setButtonDisabled]=useState(false);
    function handleDisabled(event){

        const newQuanValue=event.target.value;
        if(newQuanValue>initialQuantity){
            setButtonDisabled(false);
        }else{
            setButtonDisabled(true);
        }

    }




    return (
        <>
            {
            loading ? <Loading></Loading> : <div>
            
            <div className="card-wrapper">
                <div className="card">
                {/* card left side or image side  */}
                
                <div class="form-control mt-2 mb-3 p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <h2 className= "product-title">Order Form</h2>

                {/* New form  */}
                        <form onSubmit={handleSubmit} className=' mb-3 p-6 max-w-sm bg-white dark:bg-gray-800 dark:border-gray-700'>
                    <div class="mb-6">
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                        <input type="text" name="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter Profile Name" required=""/>
                    </div>
                    
                    <div class="mb-6">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                        <input type="email" name="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter email" required=""/>
                    </div>
                
            
                    <div class="mb-6">
                        <label for="mobile" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mobile number</label>
                        <input type="number" name="mobile" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter mobile number" required=""/>
                    </div>

                    <div class="mb-6">
                        <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Address</label>
                        <input type="text" name="address" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter address" required=""/>
                    </div>
                    <div class="mb-6">
                        <label for="quantity" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Order quantity</label>
                        <input type="number" defaultValue={initialQuantity} onChange={handleDisabled} name="quantity" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter quantity" required=""/>
                    </div>
                    

                    <button type='submit' class="btn btn-active"  disabled={buttonDisabled}  >Complete Order</button>
                </form>

                
                 </div>
                
                {/* Card Right Side  */}
                <div className= "product-content">
                    <h2 className= "product-title">{name}</h2>
                    
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
                
                </div>
                </div>
            </div>
        </div>
        }
        </>
        
        
    );
};

export default Inventory;