import React from 'react';
import './SeatMap.css';
import Seat from '../Seat/Seat'

const SeatMap = ({seatArray}) => {
  return (
    <div className="seatMap-container">
    {seatArray.map(seat => 
        <Seat key={seat.seatNumber} seatId={`seat${seat.seatNumber}`} seatNumber={seat.seatNumber} isOccupied={seat.isOccupied} seatInfo={seat.endTime} />
      )}
    </div>
    )
}

export default SeatMap;