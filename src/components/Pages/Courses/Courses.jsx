// src/pages/Courses.js
import React from 'react';
import CourseList from '../CourseList/CourseList';
import EducationalPage from '../EducationalPage/EducationalPage';
import MCQPage from '../MCQPage/MCQPage';


const Courses = () => {
  const pageData = [
    {
      title: "Educational Resources",
      subheader: "Learn and Grow",
      points: [
        "Introduction to Web Development",
        "Understanding React Basics",
        "Using Material UI Components",
        "Building User Interfaces",
        "Deploying Web Applications",
      ],
    },
    {
      title: "Advanced Topics",
      subheader: "Deep Dive into Technology",
      points: [
        "Advanced React Patterns",
        "State Management with Redux",
        "Server-Side Rendering",
        "Performance Optimization",
        "Testing and Debugging",
      ],
    },
  ];
  return (
    <div>
      {pageData.map((data, index) => (
        <EducationalPage
          key={index}
          headerTitle={data.title}
          headerSubheader={data.subheader}
          contentPoints={data.points}
        />
      ))}

      <MCQPage />
    </div>
  );
};

export default Courses;