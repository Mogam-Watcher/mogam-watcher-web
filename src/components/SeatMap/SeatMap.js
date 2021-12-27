import React from "react";
import "./SeatMap.css";
import Seat from "../Seat/Seat"

const SeatMap = () => {
  /*TODO remove: 가상 데이터 */
  const testSeatArray = [ 
    { seatNumber: '0', isOccupied: true, endTime: '18:00' },
    { seatNumber: '1', isOccupied: true, endTime: '14:00' },
    { seatNumber: '2', isOccupied: true, endTime: '14:00' },
    { seatNumber: '3', isOccupied: false},
    { seatNumber: '4', isOccupied: false},
    { seatNumber: '5', isOccupied: false}, 
    { seatNumber: '6', isOccupied: false},
    { seatNumber: '7', isOccupied: true, endTime: '21:00'}, 
    { seatNumber: '8', isOccupied: false},
    { seatNumber: '9', isOccupied: true, endTime: '17:00'}, 
    { seatNumber: '10', isOccupied: false},
    { seatNumber: '11', isOccupied: false},
  ]  

  return (
    <div className="seatMap-container">
    {testSeatArray.map(seat => 
        <Seat key={seat.seatNumber} seatId={"seat"+seat.seatNumber} seatNumber={seat.seatNumber} isOccupied={seat.isOccupied} seatInfo={seat.endTime} />
      )}
    </div>
    )
}

export default SeatMap;