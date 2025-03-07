// src/components/CourseForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './CourseForm.css';

const CourseForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/courses', { title, description, content })
      .then(response => {
        setTitle('');
        setDescription('');
        setContent('');
        alert('Course added successfully!');
      })
      .catch(error => console.error('Error adding course:', error));
  };

  return (
    <form  className="course-form"onSubmit={handleSubmit}>
      <h2>Add New Course</h2>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label>Content:</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button type="submit">Add Course</button>
    </form>
  );
};

export default CourseForm;