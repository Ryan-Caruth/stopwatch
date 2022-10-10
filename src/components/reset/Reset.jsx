import React from 'react'

const Reset = ({timer, setTimer}) => {

    const handleReset = () => {
      setTimer((timer) => timer = 0);
      console.log('Rest timer is:', timer)
    }

  return (
    <button id='reset-button' onClick={handleReset}>Reset</button>
  )
}

export default Reset