import React, {useState} from 'react';
import './CurrentSeatDisplay.css'

const CurrentSeatDisplay = ({isAvailable, seatsNumber}) => {
  
  const status = isAvailable ? '사용 가능' : '사용 중'
  const seatsType = isAvailable ? 'availableSeats' : 'bookedSeats'

  return(
    <div className={seatsType}>
      <span className='status'>
        {status}
      </span>
      <span className='seatsNumber'>
        {seatsNumber}
      </span>
    </div>
  );
}

export default CurrentSeatDisplay;
