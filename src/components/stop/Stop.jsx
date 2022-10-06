import React from 'react'

const Stop = ({ setIsRunning, setIsPaused, countRef }) => {

    const handleStop = () => {
        setIsRunning(false);
        setIsPaused(true);
        clearInterval(countRef.current);
    }

  return (
    <button id='stop-button' onClick={handleStop}>Stop</button>
  )
}

export default Stop