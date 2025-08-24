import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import Loading from '../../components/students/Loading';
import { assets } from '../../assets/assets';

const CourseDetails = () => {
  const { id } = useParams();
  const [courseData, setCourseData] = useState(null);
  const {
    allCourses,
    calculateRating,
    calculateChapterTime,
    calculateCourseDuration,
    calculateNoOfLectures,
  } = useContext(AppContext);

  useEffect(() => {
    const fetchCourseData = () => {
      const findCourse = allCourses?.find((course) => course._id === id);
      setCourseData(findCourse);
    };
    fetchCourseData();
  }, []);

  return courseData ? (
    <>
      <div className="flex md:flex-row flex-col-reverse gap-10 relative items-start justify-between md:px-36 px-8 md:pt-30 pt-20 text-left">
        <div className="absolute top-0 left-0 w-full h-500  bg-gradient-to-b from-cyan-100/70"></div>
        {/* left colunm////////////// */}
        <div className="max-w-xl z-10 text-gray-500">
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-4xl font-semibold text-gray-800">
            {courseData.courseTitle}
          </h1>

          <p
            className="pt-4 md:text-base text-sm"
            dangerouslySetInnerHTML={{
              __html: courseData.courseDescription.slice(0, 200),
            }}
          ></p>
          {/* course reviews */}
          <div className="flex items-center space-x-2 pt-3 pb-1 text-sm">
            <p>{calculateRating(courseData)}</p>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  src={
                    i < Math.floor(calculateRating(courseData))
                      ? assets.star
                      : assets.star_blank
                  }
                  alt=""
                  className="w-3.5 h-3.5"
                />
              ))}
            </div>
            <p className="text-blue-600">
              ({courseData.courseRatings.length}
              {courseData.courseRatings.length > 1 ? ' Reviews' : ' Review'})
            </p>
            {/* total number of the student enrolled */}
            <p>
              {courseData.enrolledStudents.length}{' '}
              {courseData.enrolledStudents.length > 1
                ? ' Students'
                : ' Student'}
            </p>
          </div>

          <p className="text-sm">
            Course by{' '}
            <span className="text-blue-600 underline"> Greaatstack</span>
          </p>
          <div className="pt-5 text-gray-800">
            <h2 className="text-xl font-semibold">Course Outline</h2>
            <div className="pt-5">
              {courseData.courseContent.map((chapter, index) => (
                <div key={index}>
                  <div>
                    <div>
                      <img src={assets.down_arrow_icon} alt="arrow icon" />
                      <p>{chapter.chapterTitle}</p>
                    </div>
                    <p>
                      {chapter.chapterContent.lenght}
                      lectures -{calculateChapterTime(chapter)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* right column//////////////// */}
        <div></div>
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default CourseDetails;
