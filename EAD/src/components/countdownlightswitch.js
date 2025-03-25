import { useState, useEffect } from "react";
import "./CountdownThemeToggle.css";

export default function CountdownThemeToggle() {
  const [timeLeft, setTimeLeft] = useState(30);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    if (timeLeft === 0) {
      setIsDarkTheme((prev) => !prev);
      setTimeLeft(30);
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <div className={`container ${isDarkTheme ? "dark" : "light"}`}>
      <h1>Countdown Timer with Theme Toggle</h1>
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${(timeLeft / 30) * 100}%` }}></div>
      </div>
      <p>{timeLeft > 0 ? `Time Left: ${timeLeft} seconds` : "Time's up!"}</p>
    </div>
  );
}
