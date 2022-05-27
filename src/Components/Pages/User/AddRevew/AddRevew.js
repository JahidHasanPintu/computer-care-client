import React from 'react';
import './AddRevew.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import { toast } from 'react-toastify';

const AddRevew = () => {

    const [user] = useAuthState(auth)
    const handleReview = e => {
        e.preventDefault()
        const review = {
            name: user?.displayName,
            ratings: e.target.ratings.value,
            review: e.target.review.value
        }
        console.log(review);
        fetch('https://computer-care.herokuapp.com/addreview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast('review added sucessfully')
            })
    }


    return (
        <div className='rating-from'>
            
        <form onSubmit={handleReview} className='mt-2 mb-3 p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
            <div class="mb-6">
                <label for="ratings" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your ratings</label>
                <input type="number" name="ratings" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="rate us eg: 1-5" required=""/>
            </div>
           
            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
            <textarea name="review" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>

           
            <button type="submit" class=" mt-6 text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Submit Review</button>
        </form>

        </div>
    );
};

export default AddRevew;