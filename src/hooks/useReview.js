import { useEffect, useState } from "react"

const useReview = () =>{
    const [review,setReview] = useState([]);
    useEffect(()=>{
        fetch('https://computer-care.herokuapp.com/review')
        .then(res=>res.json())
        .then(data => setReview(data));
    },[])

    return [review,setReview];
}
export default useReview;