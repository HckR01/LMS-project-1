import React from 'react';
import Hero from '../../components/students/Hero';
import Companies from '../../components/students/Companies';
import CourseSection from '../../components/students/CourseSection';

const Home = () => {
  return (
    <div>
      <Hero />
      <Companies />
      <CourseSection />
    </div>
  );
};

export default Home;
