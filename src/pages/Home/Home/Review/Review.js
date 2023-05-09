import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider';
import Loading from '../../../../Loading/Loading';
import SingleReview from './SingleReview';

const Review = () => {
    const [reviews, setReviews] = useState([]);
    const {user}=useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/reviews`)
                .then(res => res.json())
                .then(data => {
                    setReviews(data);
                    setLoading(false);
                })
        }
    }, [user])
    return (
        <div>
            {
                loading ? <div><Loading></Loading></div> : null
            }
            <div className='mt-5'>
                <h1 className='text-center text-purple-600 font-bold text-4xl mt-5 mb-5'> Customer Reviews</h1>
            </div>
            <div className='grid sm:grid-cols1 lg:grid-cols-3 gap-10 px-10  '>
                {
                    reviews.slice().reverse().map(review => <SingleReview key={review._id}
                        review={review}></SingleReview>)
                }

            </div>

        </div>
    )
}


export default Review;