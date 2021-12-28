import React from "react";
import Form from '../../components/Form/Form';
import BaseButton from '../../components/BaseButton/BaseButton';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const set = [{key:1, contents:"12:00"}, 
               {key:2, contents:"13:00"}, 
               {key:3, contents:"14:00"}, 
               {key:4, contents:"15:00"}, 
               {key:5, contents:"16:00"}];
  return (
    <div className="checkInModal-container">
      {/*TODO 좌석번호 데이터받아유 */}
      <span className="checkInModal-item" id="checkInModal-title">좌석번호 7</span>
      <div className="checkInModal-item"><Form identification='' title='이름' type='text' formHint='이름' /></div>
      <div className="checkInModal-item"><Form identification='' title='퇴실시간' type='select' formHint='예상퇴실시간' dataSet={set} /></div>
      <div className="checkInModal-item"><BaseButton buttonType="submit" title="Check In" clickEvent="#" /></div>
    </div>
  );
};

export default RegistrationForm;
