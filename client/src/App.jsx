import React from 'react';
import { Route, Routes, useMatch } from 'react-router-dom';

import Home from './pages/students/Home';
import CoursesList from './pages/students/CoursesList';
import CourseDetails from './pages/students/CourseDetails';
import MyEnrollments from './pages/students/MyEnrollments';
import Player from './pages/students/Player';
import Loading from './components/students/Loading';
import Educator from './pages/educator/Educator';
import Dashbord from './pages/educator/Dashbord';
import AddCourse from './pages/educator/AddCourse';
import MyCourses from './pages/educator/MyCourses';
import StudentEnrolled from './pages/educator/StudentEnrolled';
import Navbar from './components/students/Navbar';

function App() {
  // we have different nav bar so make a variable for it
  const isEducatorPage = useMatch('/educator/*');

  return (
    <div className="text-default min-h-screen bg-white">
      {!isEducatorPage && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses-list" element={<CoursesList />} />
        <Route path="/courses-list/:input" element={<CoursesList />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/my-enrollments" element={<MyEnrollments />} />
        <Route path="/player/:courseId" element={<Player />} />
        <Route path="/loading/:path" element={<Loading />} />
        {/* ...................for educator.... */}

        <Route path="/educator" element={<Educator />}>
          <Route path="educator" element={<Dashbord />} />
          <Route path="add-course" element={<AddCourse />} />
          <Route path="my-courses" element={<MyCourses />} />
          <Route path="student-enrolled" element={<StudentEnrolled />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
