import React, { useState, useEffect } from 'react';

export const Timer = ({ duration, onTimeUp }: { duration: number; onTimeUp: () => void }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeUp();
      return;
    }
    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timeLeft, onTimeUp]);

  return (
    <div className="text-center mb-4">
      <p className="text-xl font-semibold">Time Remaining: {timeLeft}s</p>
    </div>
  );
};
