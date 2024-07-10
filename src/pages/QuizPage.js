import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import '../styles/QuizPage.css';

const QuizPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const history = useHistory();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/questions/random');
        setQuestions(res.data);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };
    fetchQuestions();
  }, []);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      history.push('/results', { score });
    }
  };

  if (questions.length === 0) return <div>Cargando...</div>;

  return (
    <div className="quiz-page">
      <h2>Pregunta {currentQuestion + 1}</h2>
      <p>{questions[currentQuestion].texto_pregunta}</p>
      {questions[currentQuestion].respuestas.map((answer) => (
        <button key={answer.id} onClick={() => handleAnswer(answer.es_correcta)}>
          {answer.texto_respuesta}
        </button>
      ))}
    </div>
  );
};

export default QuizPage;