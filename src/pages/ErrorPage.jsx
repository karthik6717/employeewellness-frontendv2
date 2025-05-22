import React from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorPage404 from "../assets/404ErrorPagegreen.gif";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-600 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-10 text-center max-w-lg">
        {/* GIF Image */}
        <img
          src={ErrorPage404}
          alt="Error Illustration"
          className="w-60 h-auto mx-auto mb-8"
        />

        {/* Back Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => navigate('/')}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-lg transition duration-200"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;