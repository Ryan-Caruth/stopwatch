import React from 'react'

const Reset = ({timer, setTimer, setRunning }) => {

  const handleReset = () => {
    setRunning(false);
      setTimer((timer) => timer = 0);
    }

  return (
    <button id='reset-button' onClick={handleReset}>Reset</button>
  )
}

export default Reset