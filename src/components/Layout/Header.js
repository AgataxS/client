import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Preg Quiz App</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/quiz">Start Quiz</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;