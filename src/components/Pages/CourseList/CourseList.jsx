import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CourseList.css';

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    axios.get('http://localhost:5000/courses')
      .then(response => setCourses(response.data))
      .catch(error => console.error('Error fetching courses:', error));
  }, []);

  const toggleExpand = (id) => {
    setExpanded(prevExpanded => ({
      ...prevExpanded,
      [id]: !prevExpanded[id]
    }));
  };

  return (
    <div className="course-list-body">
      <h1 className="course-list-title">Courses</h1>
      <ul className="course-list">
        {courses.map(course => (
          <li key={course.id} className="course-list-item">
            <h2 className="course-list-item-title">{course.title}</h2>
            <p className="course-list-item-description">{course.description}</p>
            <div className="course-list-item-content">
              {expanded[course.id] ? course.content : course.content.slice(0, 200) + '...'}
              <button onClick={() => toggleExpand(course.id)} className="read-more-button">
                {expanded[course.id] ? 'Read Less' : 'Read More'}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;