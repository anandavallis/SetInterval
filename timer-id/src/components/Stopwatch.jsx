// src/components/Stopwatch.jsx
import React, { useState, useRef } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (timerRef.current !== null) return; // Prevent multiple intervals

    timerRef.current = setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const resetTimer = () => {
    stopTimer();
    setTime(0);
  };

  return (
    <div>
      <h2>Stopwatch: {time}s</h2>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Stopwatch;
