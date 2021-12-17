import React from "react";
import "./SeatMap.css"
/*TODO change TestSeat -> Seat component*/
import TestSeat from "../TestSeat/TestSeat";

const SeatMap = () => {
  /*TODO remove: 가상 데이터 */
  const testSeatArray = [ 
  { seatNumber: 'seat0', isOccupied: true, endTime: '18:00' },
  { seatNumber: 'seat1', isOccupied: true, endTime: '14:00' },
  { seatNumber: 'seat2', isOccupied: true, endTime: '14:00' },
  { seatNumber: 'seat3', isOccupied: false},
  { seatNumber: 'seat4', isOccupied: false},
  { seatNumber: 'seat5', isOccupied: false}, 
  { seatNumber: 'seat-6', isOccupied: false},
  { seatNumber: 'seat-7', isOccupied: true, endTime: '21:00'}, 
  { seatNumber: 'seat-8', isOccupied: false},
  { seatNumber: 'seat-9', isOccupied: true, endTime: '17:00'}, 
  { seatNumber: 'seat-10', isOccupied: false},
  { seatNumber: 'seat-11', isOccupied: false},
  ]

  return (
    <div className="seatMap-container grid">
      {testSeatArray.map(seat => 
        <TestSeat className="seatMap-compo" seatNumber={seat.seatNumber} isOccupied={seat.isOccupied} endTime={seat.endTime} />
      )}
    </div>
    )
}

export default SeatMap;
