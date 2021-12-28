import React from "react";
import Form from '../../components/Form/Form';
import BaseButton from '../../components/BaseButton/BaseButton';
import './RegistrationForm.css';

const RegistrationForm = ({seatNumber}) => {
  function getEndTimeSet() {
    const currentTime = new Date().getHours();
    const maxEndTime = 24;
    const endTimeSet = [];
    for(var i = 0; i < maxEndTime - currentTime; i++){
      endTimeSet[i] = {key: i + 1, contents: `${currentTime + i + 1}:00`};
    }
    return endTimeSet;
  }
  
  return (
    <div className="checkInModal-container">
      <span className="checkInModal-item" id="checkInModal-title">
        좌석번호 {seatNumber}
      </span>
      <div className="checkInModal-item">
        <Form 
         identification='' 
         title='이름' 
         type='text' 
         formHint='이름' 
         isDisabled={false} 
        />
      </div>
      <div className="checkInModal-item">
        <Form 
         identification='' 
         title='퇴실시간' 
         type='select' 
         formHint='예상퇴실시간' 
         dataSet={getEndTimeSet()} 
         isDisabled={false} 
        />
      </div>
      <div className="checkInModal-item">
        <BaseButton 
         buttonType="submit" 
         title="Check In" 
         clickEvent="#" 
        />
      </div>
    </div>
  );
};

export default RegistrationForm;
