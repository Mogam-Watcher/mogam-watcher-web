import React from "react";
import "./SeatMap.css"
import Seat from "../Seat/Seat";

const SeatMap = () => {
  /*TODO remove: 가상 데이터 */
  const testSeatArray = [ 
    { seatNumber: '0', id: 'seat0', isOccupied: true, seatInfo: '18:00' },
    { seatNumber: '1', id: 'seat1', isOccupied: true, seatInfo: '14:00' },
    { seatNumber: '2', id: 'seat2', isOccupied: true, seatInfo: '14:00' },
    { seatNumber: '3', id: 'seat3', isOccupied: false},
    { seatNumber: '4', id: 'seat4', isOccupied: false},
    { seatNumber: '5', id: 'seat5', isOccupied: false}, 
    { seatNumber: '6', id: 'seat6', isOccupied: false},
    { seatNumber: '7', id: 'seat7', isOccupied: true, seatInfo: '21:00'}, 
    { seatNumber: '8', id: 'seat8', isOccupied: false},
    { seatNumber: '9', id: 'seat9', isOccupied: true, seatInfo: '17:00'}, 
    { seatNumber: '10', id: 'seat10', isOccupied: false},
    { seatNumber: '11', id: 'seat11', isOccupied: false},
  ]

  return (
    <div className="seatMap-container">
      {testSeatArray.map(seat => 
        <Seat seatId={seat.id} seatNumber={seat.seatNumber} isOccupied={seat.isOccupied} seatInfo={seat.seatInfo} />
      )}
    </div>
    )
}

export default SeatMap;
