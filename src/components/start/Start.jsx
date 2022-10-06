import React from 'react'

const Start = ({ countRef, setIsRunning, timer, setTimer } ) => {

    const handleStart = () => {
        setIsRunning(true);
        countRef.current = setInterval(() => {
            setTimer((timer) => timer + 1)
            console.log('The time is: ', timer)
        }, 1000);
    }

  return (
      <button id='start-button' onClick={handleStart}>Start</button>
  )
}

export default Start