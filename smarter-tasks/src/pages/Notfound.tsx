import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl text-red-500">404 - Not Found</h1>
      <p className="text-lg text-gray-600 mt-4">
        The page you are looking for does not exist.
      </p>
      <Link to="/home" className="mt-6">
        <button
          id="backToHomeButton"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-200"
        >
          Back to Homepage
        </button>
      </Link>
    </div>
  );
};

export default Notfound;
