import React from 'react';
import { assets } from '../../assets/assets';
import SearchBar from './SearchBar';

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-6 md:px-0 space-y-7 text-center bg-gradient-to-b from-cyan-100/70">
      <h1
        className="text-3xl sm:text-4xl lg:text-5xl relative font-bold max-w-3xl mx-auto 
               bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent"
      >
        Unlock your potential with My Course App — discover endless courses,
        learn from experts, and take the first step toward your dreams.
        <span className="bg-gradient-to-r from-blue-800 to-indigo-900 bg-clip-text text-transparent relative">
          Your journey to knowledge and success starts here{' '}
          <img
            src={assets.sketch}
            alt="sketch"
            className="md:block hidden absolute -bottom-7 right-0"
          />
        </span>
      </h1>

      <p className="md:block hidden text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
        We bring together world-class instructors, interactive content, and a
        supportive community to help you achieve your personal and professional
        goals.
      </p>
      <p className="md:hidden text-gray-500 max-w-sm mx-auto text-base leading-relaxed">
        We bring together world-class instructors to help you achieve your
        professional goals.
      </p>
      <SearchBar />
    </div>
  );
};

export default Hero;
