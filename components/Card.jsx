// components/Card.js
import React from 'react';

const Card = ({ name, email, course, imgURL }) => {
  return (
    <div className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 text-white">
      <div className="flex items-center justify-center mb-4">
        <img src={imgURL} alt="Icon" className="w-12 h-12" />
      </div>
      <h2 className="text-2xl font-bold mb-2 text-center">{name}</h2>
      <div className="text-center mb-2">
        <p>{email}</p>
      </div>
      <div className="text-center">
        <p>{course}</p>
      </div>
    </div>
  );
};

export default Card;
