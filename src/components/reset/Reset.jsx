import React from 'react'

const Reset = ({timer, setTimer, setRunning, setReset }) => {

  const handleReset = () => {
    setRunning(false);
      setTimer((timer) => timer = 0);
      console.log('Rest timer is:', timer)
    }

  return (
    <button id='reset-button' onClick={handleReset}>Reset</button>
  )
}

export default Reset