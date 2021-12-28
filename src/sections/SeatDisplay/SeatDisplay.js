import React from "react";
import CurrentSeatDisplay from '../../components/CurrentSeatDisplay/CurrentSeatDisplay';
import SeatMap from '../../components/SeatMap/SeatMap';
import './SeatDisplay.css';

const SeatDisplay = ({seatArray, totalSeat, countVacantSeat}) => {
  return (
    <div class="seatDisplay-container">
      <CurrentSeatDisplay isOccupied={false} seatsNumber={totalSeat - countVacantSeat} />
      <CurrentSeatDisplay isOccupied={true} seatsNumber={countVacantSeat} />
      <SeatMap seatArray={seatArray} />
    </div>
  );
}

export default SeatDisplay;
