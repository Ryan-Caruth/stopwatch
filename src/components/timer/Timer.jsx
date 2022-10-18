import React, { useRef, useState } from "react";
// import { formatLap } from "../../utilities/FormatLap";
import Lap from "../lap/Lap";
import Reset from "../reset/Reset";
import Start from "../start/Start";
import Stop from "../stop/Stop";

const Timer = () => {
  const [timer, setTimer] = useState(0);
  const [running, setRunning] = useState(false);
  console.log(`running is: `, running)
  console.log('timer is', timer)
  const [lap, setLap] = useState([]);
  console.log('Lap is:', lap)
  const countRef = useRef(null);

 const formatTime = () => {
   const millieseconds = `0${(timer / 10) % 100}`.slice(-2);
   const seconds = `0${(Math.floor(timer / 1000) % 60)}`.slice(-2);
   const minutes = `0${(Math.floor(timer / 60000) % 60)}`.slice(-2);
   const hours = `0${(Math.floor(timer / 3600000) % 60)}`.slice(-2);
   return `${hours}:${minutes}:${seconds}:${millieseconds}`
  };


  return (
    <div className="stopwatch-container">
      <h1>Stopwatch</h1>
      <br />
      <div className="timer-container">
        <p>{formatTime()}</p>
      </div>
      {!running && <Start
        countRef={countRef}
        timer={timer}
        setTimer={setTimer}
        setRunning={setRunning}
      />}
      {running && <Stop
        countRef={countRef}
        setRunning={setRunning}
      />}
      {!running && timer > 0 && <Reset timer={timer} setTimer={setTimer} setRunning={setRunning} />}
      {running && <Lap lap={lap} setLap={setLap} setTimer={setTimer} timer={timer} formatTime={formatTime} setRunning={setRunning} />}
    </div>
  );
};

export default Timer;
