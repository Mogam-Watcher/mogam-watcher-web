import React from "react";
import './Seat.css';
import useModal from '../../components/ModalPopup/useModal';
import ModalPopup from '../../components/ModalPopup/ModalPopup';
import RegistrationForm from '../../sections/RegistrationForm/RegistrationForm';

const Seat = ({seatId, seatNumber, isOccupied, seatInfo}) => {
  const {isShowing, toggle} = useModal();
  const seatStyleVariant = isOccupied ? 'seat seat-occupied' : 'seat seat-vacant';
  const seatNumberStyleVariant = isOccupied ? 'seat-number seat-number-occupied' : 'seat-number seat-number-vacant';
  const info = isOccupied ? seatInfo : '';
  const popup = () => {
    /*TODO popup for isOccupied===true*/
    if(isOccupied) {
      return (
        <p>
          "TODO"
        </p>
      );
    } else {
      return (
        <RegistrationForm seatNumber={seatNumber}></RegistrationForm>
      );
    }
  };

  return (
    <>
      <button type='button' id={seatId} className={seatStyleVariant} onClick={toggle}>
        <div className={seatNumberStyleVariant}>
          {seatNumber}
        </div>
        <div className='seat-info'>
          {info}
        </div>
      </button>
      <ModalPopup isShowing={isShowing} hide={toggle}>
        {popup()}
      </ModalPopup>
    </>
  );
}

export default Seat;
