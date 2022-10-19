import React from "react";
import './lap.css';

const Lap = ({ lap, setLap, setTimer, timer, formatTime, setRunning}) => {
  const handleLap = () => {
    setRunning(true);
      setLap((lap) => {
        return [ formatTime(timer), ...lap ];
      });
    setTimer((timer) => (timer = 0));
  };
  return (
    <div>
      <button id="lap-button" onClick={handleLap}>
        Lap
      </button>
      <ol>
          {lap.map((l, index) => (
            <li key={index}>
              {l}
            </li>
          ))}
      </ol>
    </div>
  );
};

export default Lap;
