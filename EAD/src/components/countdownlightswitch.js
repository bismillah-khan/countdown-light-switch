
  return (
    <div className="theme-container">
      <button onClick={toggleTheme} className="toggle-btn">
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
      <div className="progress-bar" style={{ width: `${(timeLeft / 10) * 100}%` }}></div>
      <p>Time Left: {timeLeft}s</p>
      <button onClick={resetTimer} className="reset-btn">Reset Timer</button>
    </div>
  );


