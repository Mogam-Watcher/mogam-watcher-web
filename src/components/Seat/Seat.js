import './Seat.css'

const Seat = ({isOccupied, until}) => {
  const className=isOccupied?'seat occupied':'seat vacant';
  const time=isOccupied?until:'';

  return (
    <div className={className}>
      <span>
          {time}
        </span>
    </div>
  );
}

export default Seat;