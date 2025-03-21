import React from 'react';
import { Rate } from 'antd';

const TeamMember = ({ profileImg, name, skills, rating }) => {
  return (
    <div className=" p-6  flex flex-col items-center text-center">
      {/* Profile Image */}
      <img 
        src={profileImg} 
        alt={`${name}'s profile`} 
        className="w-24 h-24 rounded-full mb-4 border-4 border-blue-500"
      />
      
      {/* Name */}
      <h2 className="text-xl font-semibold text-gray-800">{name}</h2>

      {/* Skills */}
      <p className="text-blue-950 mt-2 text-sm">
        <strong>Skills:</strong> {skills.join(', ')}
      </p>

      {/* Rating */}
      <div className="mt-3">
        <Rate value={rating} disabled />
      </div>
    </div>
  );
};

export default TeamMember;
                