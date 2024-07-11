import React from 'react';
import '../../styles/CorrectAnswer.css';

const CorrectAnswer = ({ message }) => {
  return (
    <div className="correct-answer">
      <p>{message || '¡Respuesta correcta!'}</p>
    </div>
  );
};

export default CorrectAnswer;