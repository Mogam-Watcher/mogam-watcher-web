import React from "react";
import CurrentSeatDisplay from '../../components/CurrentSeatDisplay/CurrentSeatDisplay';
import SeatMap from '../../components/SeatMap/SeatMap';
import './SeatDisplay.css';

const SeatDisplay = () => {
  return (
    <div className="seatDisplay-container">
      {/*TODO seatsNumber value*/}
      <CurrentSeatDisplay isOccupied={false} seatsNumber='5' />
      <CurrentSeatDisplay isOccupied={true} seatsNumber='7' />
      <SeatMap />
    </div>
  );
}

export default SeatDisplay;
