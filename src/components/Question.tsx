import React, { useState } from 'react';

export const Question = ({ question, onComplete }: { question: any; onComplete: () => void }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleOptionClick = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((opt) => opt !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleSubmit = () => {
    if (selectedOptions.length === question.correctAnswer.length) {
      onComplete();
    }
  };

  return (
    <div className="border p-6 mb-4 rounded-lg bg-white">
      <h3 className="text-xl font-semibold mb-4">{question.question}</h3>
      <div className="space-x-2">
        {question.options.map((option: string) => (
          <button
            key={option}
            onClick={() => handleOptionClick(option)}
            className={`px-4 py-2 rounded border ${selectedOptions.includes(option) ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            {option}
          </button>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        className="mt-4 px-6 py-2 bg-green-500 text-white rounded"
        disabled={selectedOptions.length !== question.correctAnswer.length}
      >
        Submit
      </button>
    </div>
  );
};
