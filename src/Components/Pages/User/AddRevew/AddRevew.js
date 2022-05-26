import React from 'react';
import './AddRevew.css'

const AddRevew = () => {
    return (
        <div className='rating-from'>
            
        <form className='mt-2 mb-3 p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
            <div class="mb-6">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your ratings</label>
                <input type="number" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="rate us eg: 1-5" required=""/>
            </div>
           
            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
            <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>

           
            <button type="submit" class=" mt-6 text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Submit Review</button>
        </form>

        </div>
    );
};

export default AddRevew;