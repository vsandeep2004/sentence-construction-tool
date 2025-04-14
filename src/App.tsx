import React, { useState, useEffect } from 'react';
import { Question } from './components/Question';

const App = () => {
  const [questions, setQuestions] = useState<any[]>([]);

  useEffect(() => {
    fetch('http://localhost:3001/questions')
      .then((response) => response.json())
      .then((data) => setQuestions(data.questions));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-6">Sentence Construction Tool</h1>
      <div className="space-y-4">
        {questions.map((question) => (
          <Question key={question.questionId} question={question} />
        ))}
      </div>
    </div>
  );
};

export default App;
