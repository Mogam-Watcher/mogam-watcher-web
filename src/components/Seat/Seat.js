import React from "react";
import './Seat.css'

const Seat = ({seatId, seatNumber, isOccupied, seatInfo, clickEvent}) => {
  const seatStyleVariant = isOccupied ? 'seat seat-occupied' : 'seat seat-vacant';
  const seatNumberStyleVariant = isOccupied ? 'seat-number seat-number-occupied' : 'seat-number seat-number-vacant';
  const info = isOccupied ? seatInfo : '';

  return (
    <button type='button' id={seatId} className={seatStyleVariant} onClick={clickEvent}>
      <div className={seatNumberStyleVariant}>
        {seatNumber}
      </div>
      <div className='seat-info'>
        {info}
      </div>
    </button>
  );
}

export default Seat;
