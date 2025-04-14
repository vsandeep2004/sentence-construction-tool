import React, { useState, useEffect } from 'react';
import { Question } from '../components/Question';
import { Timer } from '../components/Timer';

export const HomePage = () => {
  const [questions, setQuestions] = useState<any[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isQuizComplete, setIsQuizComplete] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3001/questions')
      .then((response) => response.json())
      .then((data) => setQuestions(data.data.questions));
  }, []);

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsQuizComplete(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Sentence Construction Tool</h1>
      {isQuizComplete ? (
        <div className="text-center p-6">
          <h2 className="text-3xl">Congratulations!</h2>
          <p className="text-xl">You've completed the quiz. Check your feedback!</p>
        </div>
      ) : (
        <div className="w-full max-w-xl p-4 bg-white shadow-md rounded-lg">
          <Timer duration={30} onTimeUp={nextQuestion} />
          <Question
            question={questions[currentQuestionIndex]}
            onComplete={nextQuestion}
          />
        </div>
      )}
    </div>
  );
};
