import React from 'react';
import { assets } from '../../assets/assets';

const CallToAction = () => {
  return (
    <div className="flex flex-col items-center gap-4 pt-10 pb-24 px-8 md:px-0">
      <h1 className="text-xl md:text-4xl text-gray-800 font-semibold">
        Learn any thing ,any time any where
      </h1>
      <p className="text-gray-500 sm:text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quae
        veniam inventore soluta veritatis sit ratione dolore iure quaerat porro!
      </p>
      <div className="flex items-center gap-6 font-medium mt-4 ">
        <button className="px-10 py-3 text-white bg-blue-600 rounded-md">
          Get Started
        </button>
        <button className="flex items-center gap-2">
          Learn More <img src={assets.arrow_icon} alt="arrow-icon" />
        </button>
      </div>
    </div>
  );
};

CallToAction.propTypes = {};

export default CallToAction;
