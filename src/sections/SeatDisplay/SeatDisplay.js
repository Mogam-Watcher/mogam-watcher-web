import React,{ createContext, useEffect, useState } from 'react';
import CurrentSeatDisplay from '../../components/CurrentSeatDisplay/CurrentSeatDisplay';
import SeatMap from '../../components/SeatMap/SeatMap';
import './SeatDisplay.css';
import { dbService } from '../../util/FirebaseLoader';

const SeatContext = createContext();
const SeatDisplay = ({total}) => {
  const totalSeat = total;
  const [countVacantSeat, setCountVacantSeat] = useState(total);
  const [seatArray, setSeatArray] = useState([]);
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);
    dbService
    .collection("tables")
    .orderBy('seatNumber', 'asc')
    .onSnapshot((snapshot) => {
      const seatArray=[];
      let count = 0;
      snapshot.docs.map((doc) => {
        seatArray.push(doc.data());
        if(doc.data().isOccupied == false){
          count++;
        }
      });
      setCountVacantSeat(count);
      setSeatArray(seatArray);
      setLoading(false);
    });
  }, []);
  
  if (loading) return <div>로딩중</div>

  return (
    <SeatContext.Provider value={(seatArray)}>
      <div className="seatDisplay-container">
        <CurrentSeatDisplay isOccupied={true} seatsNumber={countVacantSeat} />
        <CurrentSeatDisplay isOccupied={false} seatsNumber={totalSeat - countVacantSeat} />
        <SeatMap seatArray={seatArray}/>
      </div>
    </SeatContext.Provider>
  );
}
export {SeatContext};
export default SeatDisplay;
