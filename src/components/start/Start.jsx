import React from 'react'

const Start = ({ countRef, timer, setTimer } ) => {

    const handleStart = () => {
        countRef.current = setInterval(() => {
            setTimer((timer) => timer + 10)
        }, 10);
    }

  return (
      <button id='start-button' onClick={handleStart}>Start</button>
  )
}

export default Start