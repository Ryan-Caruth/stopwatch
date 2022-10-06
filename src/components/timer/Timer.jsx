import React, { useRef, useState } from "react";
import Reset from "../reset/Reset";
import Start from "../start/Start";
import Stop from "../stop/Stop";

const Timer = () => {
  const [isRunning, setIsRunning] = useState(false);
  // console.log('Is running is: ', isRunning)
  const [isPaused, setIsPaused] = useState(false);
  const [timer, setTimer] = useState(0);
  const countRef = useRef(null);

  return (
    <div className="stopwatch-container">
      <h1>Stopwatch</h1>
      <br />
      <div className="timer-container">
        <h1>{timer}</h1>
        <span id="hours">00:</span>
        <span id="minutes">00:</span>
        <span id="seconds">00:</span>
        <span id="millieseconds">00</span>
      </div>
      <Start countRef={countRef} setIsRunning={setIsRunning} timer={timer} setTimer={setTimer} />
      <Stop setIsRunning={setIsRunning} setIsPaused={setIsPaused} countRef={countRef} />
      <Reset timer={timer} setTimer={setTimer} />
    </div>
  );
};

export default Timer;
