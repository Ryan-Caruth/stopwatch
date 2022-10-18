import React from "react";
// import { formatLap } from "../../utilities/FormatLap";

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
        <li>
        {lap.map((l) => {
          return (l)
        })}
        </li>
      </ol>
    </div>
  );
};

export default Lap;
