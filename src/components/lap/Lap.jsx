import React from "react";

const Lap = ({ lap, setLap, setTimer, timer }) => {
  const handleLap = () => {
      setLap((lap) => {
        return [ ...lap, timer ];
      });
    setTimer((timer) => (timer = 0));
  };
  return (
    <div>
      <button id="lap-button" onClick={handleLap}>
        Lap
      </button>
      <ul>
        {lap.map((l) => {
          return (l)
        })}
      </ul>
    </div>
  );
};

export default Lap;
