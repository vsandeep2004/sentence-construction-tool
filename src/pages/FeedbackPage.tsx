import React from 'react';

export const FeedbackPage = ({ score }: { score: number }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-4">Feedback</h2>
      <p className="text-xl">Your score is: {score} out of 10</p>
      <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded">Retake Quiz</button>
    </div>
  );
};
