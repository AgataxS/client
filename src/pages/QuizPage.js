import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import '../styles/QuizPage.css';
import QuestionItem from '../components/quiz/Questionitem';
import CorrectAnswer from '../components/CorrectAnswer/CorrectAnswer';
import IncorrectAnswer from '../components/IncorrectAnswer/IncorrectAnswer';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';

const QuizPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/questions/random');
        const shuffledQuestions = res.data.map(question => ({
          ...question,
          respuestas: shuffleArray([...question.respuestas])
        }));
        setQuestions(shuffledQuestions);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching questions:', error);
        setLoading(false);
      }
    };
    fetchQuestions();
  }, []);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleAnswer = (answerId) => {
    const currentQuestionObj = questions[currentQuestion];
    const selectedAnswer = currentQuestionObj.respuestas.find(answer => answer.id.toString() === answerId);
    const isAnswerCorrect = selectedAnswer.es_correcta;

    setIsCorrect(isAnswerCorrect);
    setShowFeedback(true);

    if (isAnswerCorrect) {
      setScore(prevScore => prevScore + 1);
    }

    setTimeout(() => {
      setShowFeedback(false);
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        history.push('/results', { score: score + (isAnswerCorrect ? 1 : 0) });
      }
    }, 2000);
  };

  if (loading) return <LoadingSpinner />;
  if (questions.length === 0) return <div>No se pudieron cargar las preguntas.</div>;

  return (
    <div className="quiz-page">
      <h2>Pregunta {currentQuestion + 1}</h2>
      {!showFeedback ? (
        <QuestionItem
          question={questions[currentQuestion]}
          onAnswer={handleAnswer}
        />
      ) : isCorrect ? (
        <CorrectAnswer />
      ) : (
        <IncorrectAnswer
          correctAnswer={questions[currentQuestion].respuestas.find(answer => answer.es_correcta).texto_respuesta}
        />
      )}
      <p>Puntuación actual: {score}</p>
    </div>
  );
};

export default QuizPage;