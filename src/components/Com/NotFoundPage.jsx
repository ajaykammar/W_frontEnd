import React from 'react';
import { Link } from 'react-router-dom';
import ErrorIMg from "../../assets/Images/404/Error404.png"
const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen  text-gray-800">
     
      <img src={ErrorIMg} alt='404'/>
      <h2 className="mt-4 text-2xl font-semibold text-gray-700">Page Not Found</h2>
      <p className="mt-2 text-gray-500 text-center">
        The page you are looking for does not exist. It might have been moved or deleted.
      </p>
      <Link to="/" className="mt-6">
        <button className="px-6 py-2 text-white bg-blue-950 rounded-full hover:bg-blue-900 transition duration-300 ease-in-out shadow-lg">
          Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
