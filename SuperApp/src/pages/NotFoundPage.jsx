import React from 'react'
import {Link} from 'react-router-dom'
const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-9xl font-bold text-red-500">404</h1>
        <p className="text-2xl text-gray-700 mt-4">Oops! The page you're looking for doesn't exist.</p>
        <Link to="/" className="mt-6 inline-block">
          <button className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition duration-300">
            Go back to Home
          </button>
        </Link>
      </div>
    </div>
  )
}

export default NotFoundPage