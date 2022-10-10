import React from 'react'

const Stop = ({ countRef }) => {

    const handleStop = () => {
        clearInterval(countRef.current);
    }

  return (
    <button id='stop-button' onClick={handleStop}>Stop</button>
  )
}

export default Stop