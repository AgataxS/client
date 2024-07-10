import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Bienvenido al Quiz</h1>
      <Link to="/quiz" className="start-button">Comenzar Quiz</Link>
    </div>
  );
};

export default HomePage;