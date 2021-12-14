import './Seat.css'

const Seat = ({isOccupied, endTime}) => {
  const styleVariant=isOccupied?'seat seat-occupied':'seat seat-vacant';
  const time=isOccupied?endTime:'';

  return (
    <div className={styleVariant}>
      <span>
          {time}
        </span>
    </div>
  );
}

export default Seat;
