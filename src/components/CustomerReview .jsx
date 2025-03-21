import React from 'react';
import { Rate } from 'antd';

const CustomerReview = () => {

    const review = {
        profileImage: 'https://cdn3.pixelcut.app/1/3/profile_picture_1728ecf2bd.jpg',
        username: 'John Doe',
        rating: 4,
        description: 'The product quality is fantastic, and it exceeded my expectations! Highly recommended.'
      };
  return (    <div className='w-full flex mt-9 flex-col justify-center items-center'>
<h2 className='text-blue-950 w-1/2 p-2'>Customer Review</h2>
    <div className="p-4 border w-1/2 m-auto rounded shadow-sm bg-white mb-4">
      <div className="flex items-center mb-3">
        {/* User Profile Image */}
        <img
          src={review.profileImage}
          alt={`${review.username}'s profile`}
          className="w-12 h-12 rounded-full mr-3"
        />
        <div>
          {/* Username */}
          <h4 className="font-semibold text-lg">{review.username}</h4>
          {/* Star Rating */}
          <Rate value={review.rating} disabled />
        </div>
      </div>

      {/* Review Description */}
      <p className="text-gray-700">{review.description}</p>
    </div>
    <div className="p-4 border w-1/2 m-auto rounded shadow-sm bg-white mb-4">
      <div className="flex items-center mb-3">
        {/* User Profile Image */}
        <img
          src={review.profileImage}
          alt={`${review.username}'s profile`}
          className="w-12 h-12 rounded-full mr-3"
        />
        <div>
          {/* Username */}
          <h4 className="font-semibold text-lg">{review.username}</h4>
          {/* Star Rating */}
          <Rate value={review.rating} disabled />
        </div>
      </div>

      {/* Review Description */}
      <p className="text-gray-700">{review.description}</p>
    </div>
    </div>
  );
};



export default CustomerReview;
