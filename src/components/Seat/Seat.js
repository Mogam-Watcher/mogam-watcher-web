import './Seat.css'

const Seat = ({seatNumber, isOccupied, seatInfo, clickEvent}) => {
  const seatStyleVariant = isOccupied ? 'seat seat-occupied' : 'seat seat-vacant';
  const seatNumberStyleVariant = isOccupied ? 'seat-number seat-number-occupied' : 'seat-number seat-number-vacant';
  const voidFunction = () => {};
  const event = isOccupied ? voidFunction : clickEvent;
  const info = isOccupied ? seatInfo : '';

  return (
    <button type='button' className={seatStyleVariant} onClick={event}>
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
