import React from 'react';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <footer className="bg-gray-900 md:px-36 text-left w-full mt-10">
      {/* 3 column footer */}
      <div className="flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-32 py-10 border-b border-white/30">
        <div className="flex flex-col md:items-start items-center w-full">
          <img src={assets.logo_dark} alt="logo" />
          <p className="mt-6 text-center md:text-left text-sm text-white/80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
            error esse aliquid et ducimus distinctio quam nostrum iusto
            doloribus omnis?
          </p>
        </div>
        <div className="flex flex-col md:items-start items-center w-full ">
          <h2 className=" font-semibold text-white mb-5">Company</h2>
          <ul className="flex md:flex-col w-full  justify-between text-sm text-white/80 md:space-y-2">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
        {/*for onlymiddum and big screen  */}
        <div className="hidden md:flex flex-col items-start  w-full">
          <h2 className=" font-semibold text-white mb-5">
            Subscribe to our newsletter
          </h2>
          <p className="text-sm text-white/80">
            the latest updates and offers from My Course App will be sent to you
          </p>
          <div className="flex items-center gap-2 mt-4">
            <input
              className="border border-gray-500/30 py-2 px-4 rounded w-full bg-gray-800 text-sm text-white/80 placeholder:text-white/60"
              type="email"
              placeholder="Enter your email"
            />
            <button className="bg-white text-gray-900 py-2 px-4 rounded">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <p className="py-4 text-center text-xs md:text-sm text-white/60">
        Coppyright &copy; 2025 My Course App. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
