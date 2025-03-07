import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar/SearchBar';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="header-logo">Educational Website</Link>
        <nav className="header-nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/add-course">Add Course</Link></li>
          </ul>
        </nav>
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;