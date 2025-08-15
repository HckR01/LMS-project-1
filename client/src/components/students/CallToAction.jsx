import React from 'react';
import { assets } from '../../assets/assets';

const CallToAction = () => {
  return (
    <div>
      <h1>Learn any thing ,any time any where</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quae
        veniam inventore soluta veritatis sit ratione dolore iure quaerat porro!
      </p>
      <div>
        <button>Get Started</button>
        <button>
          Learn More <img src={assets.arrow_icon} alt="arrow-icon" />
        </button>
      </div>
    </div>
  );
};

CallToAction.propTypes = {};

export default CallToAction;
