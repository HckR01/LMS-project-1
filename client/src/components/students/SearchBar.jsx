import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ defaultValue = '' }) => {
  const navigate = useNavigate(); // page navigation ke liye hook
  const [input, setInput] = useState(defaultValue); // input ka state manage karne ke liye

  // jab search form submit hota hai
  const onSearchHandler = (e) => {
    e.preventDefault(); // page reload hone se rokta hai
    navigate('/courses-list/' + input); // search ke result page pe navigate karta hai
  };

  return (
    <div>
      <form
        onSubmit={onSearchHandler} // form submit hone par handler call hota hai
        className="max-w-xl w-full md:h-14 h-12 flex items-center bg-white border border-gray-500/20 rounded"
      >
        {/* search icon */}
        <img
          src={assets.search_icon}
          alt="search_icon"
          className="md:auto w-30 px-3"
        />

        {/* search input field */}
        <input
          onChange={(e) => setInput(e.target.value)} // input value update karta hai
          value={input} // state se bind hota hai
          type="text"
          placeholder="Search for courses"
          className="w-full h-full outline-none text-gray-500/80"
        />

        {/* search button */}
        <button
          type="submit" // form ko submit karta hai
          className="bg-blue-600 rounded text-white md:px-10 px-7 md:py-3 py-2 mx-1"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
