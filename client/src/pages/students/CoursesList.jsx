import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import SearchBar from '../../components/students/SearchBar';
import CourseCard from '../../components/students/CourceCard';
import { useParams } from 'react-router-dom';

const CoursesList = () => {
  const { navigate, allCourses } = useContext(AppContext);
  const { input } = useParams();

  // filter for searching
  const [filteredCourses, setFilteredCourses] = useState([]);
  useEffect(() => {
    if (allCourses && allCourses.length > 0) {
      const tempCourses = allCourses.slice();
      input
        ? setFilteredCourses(
            tempCourses.filter((item) =>
              item.courseTitle.toLowerCase().includes(input.toLocaleLowerCase())
            )
          )
        : setFilteredCourses(tempCourses);
    }
  }, [allCourses, input]);

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
      <di className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
        {filteredCourses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </di>
    </div>
  );
};

export default CoursesList;
