import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import '../styles/ResulPage.css';

const ResultsPage = () => {
  const location = useLocation();
  const score = location.state?.score || 0;

  return (
    <div className="results-page">
      <h2>Resultados del Quiz</h2>
      <p>Tu puntuación: {score} de 10</p>
      <Link to="/" className="home-button">Volver al Inicio</Link>
    </div>
  );
};

export default ResultsPage;