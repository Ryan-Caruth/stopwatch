import React, { useRef, useState } from "react";
import Lap from "../lap/Lap";
import Reset from "../reset/Reset";
import Start from "../start/Start";
import "./timer.css";

const Timer = () => {
  const [timer, setTimer] = useState(0);
  const [running, setRunning] = useState(false);
  const [lap, setLap] = useState([]);
  const countRef = useRef(null);

  const formatTime = () => {
    const millieseconds = `0${(timer / 10) % 100}`.slice(-2);
    const seconds = `0${Math.floor(timer / 1000) % 60}`.slice(-2);
    const minutes = `0${Math.floor(timer / 60000) % 60}`.slice(-2);
    const hours = `0${Math.floor(timer / 3600000) % 60}`.slice(-2);
    return `${hours}:${minutes}:${seconds}:${millieseconds}`;
  };

  return (
    <div className="stopwatch-container">
      <div id="stopwatch-title">
        <h1>Stopwatch</h1>
      </div>
      <hr />
      <div className="timer-container">
        <p>{formatTime()}</p>
      </div>
      <div className="buttons">
        {!running && (
          <Start
            countRef={countRef}
            timer={timer}
            setTimer={setTimer}
            setRunning={setRunning}
          />
        )}
        {!running && timer > 0 && (
          <Reset timer={timer} setTimer={setTimer} setRunning={setRunning} />
        )}
        {running && (
          <Lap
            lap={lap}
            setLap={setLap}
            setTimer={setTimer}
            timer={timer}
            formatTime={formatTime}
            setRunning={setRunning}
            countRef={countRef}
          />
        )}
      </div>
    </div>
  );
};

export default Timer;
