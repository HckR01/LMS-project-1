import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import SearchBar from '../../components/students/SearchBar';
import { useParams } from 'react-router-dom';

const CoursesList = () => {
  const { navigate, allCourses } = useContext(AppContext);
  const { input } = useParams();

  return (
    <div className="position-relative md:px-36 px-8 pt-20 text-left">
      <div className="flex items-start md:flex-row flex-col w-full justify-between">
        <div>
          <h1 className="text-4xl font-semibold text text-gray-800">
            CoursesList
          </h1>
          <p className="text-gray-500">
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => navigate('/')}
            >
              Home
            </span>{' '}
            / <span>CoursesList</span>
          </p>
        </div>
        <SearchBar data={input} />
      </div>
    </div>
  );
};

export default CoursesList;
