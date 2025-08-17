import React from 'react';
import { Link } from 'react-router-dom';
import CourceCard from './CourceCard';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const CourseSection = () => {
  const { allCourses } = useContext(AppContext);
  return (
    <div className="flex flex-col items-center py-16 md:px-40 px-8">
      {/* Heading */}
      <h2 className="  md:text-4xl text-3xl font-medium text-gray-800">
        Learn from top industry experts
      </h2>

      {/* Description */}
      <p className="  text-center text-sm md:text-base text-gray-500 mt-3">
        Explore our expertly curated courses in technology, business, design,
        and personal growth. Whether you're upgrading skills or starting fresh,
        our lessons are built to inspire and deliver success.
      </p>
      <div className="grid [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))] px-4 md:px-0 md:my-16 my-10 gap-4">
        {allCourses.slice(0, 4).map((course, index) => (
          <CourceCard key={index} course={course} />
        ))}
      </div>

      {/* Link to course list */}
      <Link
        to={'/courses-list/'}
        onClick={() => scrollTo(0, 0)}
        className="text-lg text-gray-500 border border-gray-500/30 px-10 py-3 rounded inline-block mt-4"
      >
        Show all courses
      </Link>
    </div>
  );
};

export default CourseSection;
