import React,{ createContext, useEffect, useState } from 'react';
import CurrentSeatDisplay from '../../components/CurrentSeatDisplay/CurrentSeatDisplay';
import SeatMap from '../../components/SeatMap/SeatMap';
import './SeatDisplay.css';
import { dbService } from '../../util/FirebaseLoader';

const SeatContext = createContext();
const SeatDisplay = () => {
  const totalSeat = 12;
  const [countVacantSeat, setCountVacantSeat] = useState(12);
  const [seatArray, setSeatArray] = useState([]);
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);
    dbService
    .collection("tables")
    .orderBy('seatNumber', 'asc')
    .onSnapshot((snapshot) => {
      const seatArray = snapshot.docs.map((doc) => ({
        ...doc.data(),
      }));
      setSeatArray(seatArray);
      setLoading(false);
    });
  }, []);
  
  if (loading) return <div>로딩중</div>

  return (
    <SeatContext.Provider value={(seatArray)}>
      <div className="seatDisplay-container">
        <CurrentSeatDisplay isOccupied={false} seatsNumber={totalSeat - countVacantSeat} />
        <CurrentSeatDisplay isOccupied={true} seatsNumber={countVacantSeat} />
        <SeatMap seatArray={seatArray}/>
      </div>
    </SeatContext.Provider>
  );
}
export {SeatContext};
export default SeatDisplay;