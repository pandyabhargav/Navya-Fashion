import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-9xl font-serif text-[#5B0A1A] opacity-20 py-10">404</h1>
            <div className="-mt-12 mb-8">
                <h2 className="text-3xl font-serif text-[#5B0A1A] mb-4">Page Not Found</h2>
                <p className="text-gray-500 max-w-md mx-auto">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
            </div>

            <Link
                to="/"
                className="bg-[#5B0A1A] text-white px-8 py-3 rounded hover:bg-black transition-colors"
            >
                Return to Homepage
            </Link>
        </div>
    );
};

export default NotFound;
