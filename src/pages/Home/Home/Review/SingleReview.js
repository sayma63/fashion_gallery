import React from 'react';

const SingleReview = ({ review }) => {
    const {  userEmail, description, ratings } = review;
    return (
        <div>
            <div className="card lg:max-w-lg bg-sky-500 shadow-xl mt-10">

                <div className="card-body">
                    <h2 className="card-title">Reviewer Info</h2>
                    <p>Email:{userEmail}</p>
                    <p>Ratings:{ratings}</p>
                    <p><span> Description:{description}</span></p>

                </div>
            </div>
        </div>
    );
};

export default SingleReview;