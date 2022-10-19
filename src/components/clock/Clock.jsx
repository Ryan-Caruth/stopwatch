import React, { useEffect, useState } from 'react'

const Clock = () => {
    //Add a State that holds the date
    const [date, setDate] = useState(new Date());
    //Get the current date
        const getDate = () => {
            setDate(new Date());
    }

    //UseEffect to continually update time


  return (
      <div>
          The date is {date.toDateString()}<br />
          The time is {date.toLocaleTimeString()}.
      </div>
  )
}

export default Clock