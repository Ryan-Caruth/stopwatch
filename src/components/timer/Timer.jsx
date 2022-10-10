import React, { useRef, useState } from "react";
import Lap from "../lap/Lap";
import Reset from "../reset/Reset";
import Start from "../start/Start";
import Stop from "../stop/Stop";

const Timer = () => {
  const [timer, setTimer] = useState(0);
  console.log('timer is', timer)
  const [lap, setLap] = useState([]);
  console.log('Lap is:', lap)
  const countRef = useRef(null);

  return (
    <div className="stopwatch-container">
      <h1>Stopwatch</h1>
      <br />
      <div className="timer-container">
        <span id="hours">{("0" + Math.floor((timer / 360000) % 60)).slice(-2)}:</span>
        <span id="minutes">{("0" + Math.floor((timer / 60000) % 60)).slice(-2)}:</span>
        <span id="seconds">{("0" + Math.floor((timer / 1000) % 60)).slice(-2)}:</span>
        <span id="millieseconds">{("0" + ((timer / 10) % 100)).slice(-2)}</span>
      </div>
      <Start
        countRef={countRef}
        timer={timer}
        setTimer={setTimer}
      />
      <Stop
        countRef={countRef}
      />
      <Reset timer={timer} setTimer={setTimer} />
      <Lap lap={lap} setLap={setLap} setTimer={setTimer} timer={timer} />
    </div>
  );
};

export default Timer;
