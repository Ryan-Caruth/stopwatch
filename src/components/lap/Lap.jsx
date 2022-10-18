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
      <div id="list">
        {lap.map((l) => {
          return (l)
        })}
      </div>
    </div>
  );
};

export default Lap;
