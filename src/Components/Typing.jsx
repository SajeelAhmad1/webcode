import React, { useState, useEffect } from 'react';

const TypingSpeedChecker = () => {
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [quote, setQuote] = useState('This is the text to type.');
  const [userInput, setUserInput] = useState('');
  const [result, setResult] = useState('');
  const [userTime, setUserTime] = useState(0);

  const startTypingTest = () => {
    setStartTime(new Date().getTime());
    setUserInput('');
    setResult('');
    setUserTime(0);
  };

  const endTypingTest = () => {
    if (startTime) {
      setEndTime(new Date().getTime());
      const totalTime = (endTime - startTime) / 1000; // in seconds

      const typedWords = userInput.trim().split(' ').length;
      const originalWords = quote.trim().split(' ').length;

      const accuracy = calculateAccuracy(userInput, quote);
      const speed = calculateSpeed(typedWords, totalTime);

      setResult(`Speed: ${speed} WPM | Accuracy: ${accuracy}%`);
      setUserTime(totalTime.toFixed(2));
    }
  };

  const calculateSpeed = (wordsTyped, timeTaken) => {
    const wordsPerMinute = (wordsTyped / timeTaken) * 60;
    return Math.round(wordsPerMinute);
  };

  const calculateAccuracy = (typedText, originalText) => {
    // Implement Levenshtein distance algorithm to calculate errors in typed text
  };

  useEffect(() => {
    if (userInput === quote) {
      endTypingTest();
    }
  }, [userInput]);

  return (
    <div>
      <p>{quote}</p>
      <textarea
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Start typing..."
        disabled={!startTime}
      />
      <button onClick={startTypingTest} disabled={startTime}>
        Start Typing Test
      </button>
      {result && <p>{result}</p>}
      {endTime && <p>Time taken by you: {userTime} seconds</p>}
      {endTime && (
        <p>
          Actual time for typing: {(endTime - startTime) / 1000} seconds
        </p>
      )}
    </div>
  );
};

export default TypingSpeedChecker;
