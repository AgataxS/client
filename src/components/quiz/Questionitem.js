import React from 'react';
import '../../styles/QuestionItem.css';

const QuestionItem = ({ question, onAnswer }) => {
  const handleChange = (event) => {
    onAnswer(event.target.value);
  };

  return (
    <div className="question-item">
      <h3>{question.texto_pregunta}</h3>
      <form>
        {question.respuestas.map((answer) => (
          <label key={answer.id}>
            <input
              type="radio"
              name="answer"
              value={answer.id.toString()}
              onChange={handleChange}
            />
            {answer.texto_respuesta}
          </label>
        ))}
      </form>
    </div>
  );
};

export default QuestionItem;