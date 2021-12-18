import './Seat.css'

const Seat = ({seatNumber, isOccupied, endTime, clickEvent}) => {
  const seatStyleVariant = isOccupied ? 'seat seat-occupied' : 'seat seat-vacant';
  const seatNumberStyleVariant = isOccupied ? 'seat-number seat-number-occupied' : 'seat-number seat-number-vacant';
  const voidFunction = () => {};
  const event = isOccupied ? voidFunction : clickEvent;
  const info = isOccupied ? endTime : '';

  return (
    <button 
     type='button' className={seatStyleVariant} onClick={event}>
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
