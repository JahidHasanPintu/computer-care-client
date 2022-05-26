import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const AddProdcut = () => {
    // const { register, handleSubmit } = useForm();
    const handleSubmit=event=>{
        event.preventDefault();
        const partsData= {
             name:event.target.name.value,
             price:event.target.price.value,
             quantity:event.target.quantity.value,
             minimum:event.target.minimum.value,
             description:event.target.description.value,
             img:event.target.imagelink.value

        }
        
        console.log(partsData);

        const url= `https://computer-care.herokuapp.com/adminpost`;
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
            
            toast('Parts added successfully');
        })
    }
    return (
        <div>
             <form onSubmit={handleSubmit} className='mt-2 mb-3 p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
             <div class="mb-6">
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Parts Name</label>
                <input type="text" name="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter parts name" required=""/>
            </div>
            
            <div class="mb-6">
                <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Price</label>
                <input type="number" name="price" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter product price" required=""/>
            </div>
            <div class="mb-6">
                <label for="quantity" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Quantity</label>
                <input type="number" name="quantity" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter quantity" required=""/>
            </div>
            <div class="mb-6">
                <label for="minimum-quantity" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Minimum Selling Quantity</label>
                <input type="number" name="minimum" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter Minimum Selling quantity" required=""/>
            </div>

            <div class="mb-6">
                <label for="imagelink" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Image Link</label>
                <input type="text" name="imagelink" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter image link" required=""/>
            </div>
           
            <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Parts Description</label>
            <textarea name="description" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter full description here..."></textarea>

           
            <button type="submit" class=" mt-6 text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add Product</button>
        </form>

        
        </div>
    );
};

export default AddProdcut;