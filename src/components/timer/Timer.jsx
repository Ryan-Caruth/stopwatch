import React from "react";

const Timer = () => {
  return (
    <div className="stopwatch-container">
      <h1>Stopwatch</h1>
      <br />
      <div className="timer-container">
        <span id="hours">00:</span>
        <span id="minutes">00:</span>
        <span id="seconds">00:</span>
        <span id="millieseconds">00</span>
      </div>
    </div>
  );
};

export default Timer;
