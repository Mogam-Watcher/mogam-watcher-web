import React, { useContext } from "react";
import { SeatContext } from "../../App";
import CurrentSeatDisplay from '../../components/CurrentSeatDisplay/CurrentSeatDisplay';
import SeatMap from '../../components/SeatMap/SeatMap';
import './SeatDisplay.css';

const SeatDisplay = () => {
  const seats = useContext(SeatContext);

  return (
    <div className="seatDisplay-container">
      <CurrentSeatDisplay isOccupied={false} seatsNumber={seats.totalSeat - seats.countVacantSeat} />
      <CurrentSeatDisplay isOccupied={true} seatsNumber={seats.countVacantSeat} />
      <SeatMap seatArray={seats.seatArray} />
    </div>
  );
}

export default SeatDisplay;
