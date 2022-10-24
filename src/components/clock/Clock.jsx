import React, { useEffect, useState } from 'react'
import './clock.css'

const Clock = () => {
    //Add a State that holds the date
    const [date, setDate] = useState(new Date());

    //UseEffect to continually update time
    useEffect(() => {
        //Run the side effect when the component mounts
        const updateTime = setInterval(() => {
            setDate(new Date())
        }, 1000)
        //Clear side effect when component unmounts
        return () => {
            clearInterval(updateTime)
        }
    }, []);

  return (
      <div id='clock-display'>
          {date.toDateString()}<br />
          {date.toLocaleTimeString()}
      </div>
  )
}

export default Clock