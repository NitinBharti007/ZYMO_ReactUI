import React from 'react';

function Search() {
  return (
    <div className="flex flex-col items-center justify-center min-h-10 bg-[#fffafa] p-4">
      <h1 className="text-2xl mb-2">Enter your email for the latest updates.</h1>
      <div className="flex border border-black rounded-lg w-full max-w-md">
        <input 
          type="email" 
          placeholder="Email address" 
          className="p-1 w-full outline-none rounded-l-lg"
        />
        <button 
          className="bg-red-600 text-white p-1 rounded-r-lg"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Search;
