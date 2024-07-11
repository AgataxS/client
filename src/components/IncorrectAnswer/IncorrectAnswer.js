import React from 'react';
import '../../styles/IncorrectAnswer.css';

const IncorrectAnswer = ({ message, correctAnswer }) => {
  return (
    <div className="incorrect-answer">
      <p>{message || '¡Respuesta incorrecta!'}</p>
      {correctAnswer && <p>La respuesta correcta era: {correctAnswer}</p>}
    </div>
  );
};

export default IncorrectAnswer;