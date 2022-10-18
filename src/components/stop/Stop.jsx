import React from 'react'

const Stop = ({ countRef, setRunning }) => {

  const handleStop = () => {
    setRunning(false);
    clearInterval(countRef.current);
    }

  return (
    <button id='stop-button' onClick={handleStop}>Stop</button>
  )
}

export default Stop