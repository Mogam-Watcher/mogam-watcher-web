import React, {useState} from 'react';
import './CurrentSeatDisplay.css';

const CurrentSeatDisplay = ({isOccupied, seatsNumber}) => {
  
  const status = isOccupied ? '사용가능' : '사용중';
  const seatsType = isOccupied ? 'vacant' : 'occupied';

  return(
    <div className={`currentSeatDisplay currentSeatDisplay--${seatsType}`}>
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
