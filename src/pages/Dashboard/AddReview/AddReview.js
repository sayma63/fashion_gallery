import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import toast from 'react-hot-toast';

const AddReview = () => {
    const {user} =useContext(AuthContext);
    console.log(user)
    const onSubmit = (event) => {
        event.preventDefault();


        const ratings = event.target.ratings.value;
        const description = event.target.description.value;


        const review={
            userEmail: user.email,
           ratings,
            description

        }
        





        fetch('http://localhost:5000/reviews', {
            method: "POST",
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(review)
        })

            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    
                     event.target.reset();
                     toast(' review added successfully')
                }
            })

    }
    return (
        <div>
            <h1 className='text-center text-primary text-4xl'>Reviews</h1>
            <form onSubmit={onSubmit} className='grid grid-cols-1 gap-3 justify-items-center'>

                
                <input type="email" name='email' disabled value={user?.email} className="input input-bordered w-full max-w-xs" />
                <input type="text" name='ratings' placeholder="Ratings" className="input input-bordered w-full max-w-xs" />
                <textarea type="text" name='description' placeholder="Description" className="input input-bordered w-full max-w-xs" />


                <input type="submit" value='Reviews' placeholder="" className="input input-bordered w-full max-w-xs btn btn-primary" />
            </form>
        </div>
    );
};

export default AddReview;
