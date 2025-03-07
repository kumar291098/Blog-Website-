import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AddCourse from './components/Pages/AddCourses/AddCourses';
import Header from './components/Layout/Header/Header';
import Home from './components/Pages/Home/Home';
import Footer from './components/Layout/Footer/Footer';
import Courses from './components/Pages/Courses/Courses';

const App = () => {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/add-course" element={<AddCourse />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;