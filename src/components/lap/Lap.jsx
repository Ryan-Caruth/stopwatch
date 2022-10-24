import React from "react";
import Stop from "../stop/Stop";
import './lap.css';

const Lap = ({ lap, setLap, setTimer, timer, formatTime, setRunning, countRef}) => {
  const handleLap = () => {
    setRunning(true);
      setLap((lap) => {
        return [ formatTime(timer), ...lap ];
      });
    setTimer((timer) => (timer = 0));
  };

  return (
    <div id="lap-stop">
      <Stop setRunning={setRunning} countRef={countRef} />
      <button id="lap-button" onClick={handleLap}>
        Lap
      </button>
      <ol id="laps">
        {lap.map((l, index) => (
          <li key={index}>{l}</li>
        ))}
      </ol>
    </div>
  );
};

export default Lap;
