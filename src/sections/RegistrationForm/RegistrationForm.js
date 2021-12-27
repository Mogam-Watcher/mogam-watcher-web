import React from "react";
import useModal from '../../components/ModalPopup/useModal';
import Form from '../../components/Form/Form';
import TextButton from '../../components/TextButton/TextButton';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const {isShowing, toggle} = useModal();
  const set = [{key:1, contents:"12:00"}, 
               {key:2, contents:"13:00"}, 
               {key:3, contents:"14:00"}, 
               {key:4, contents:"15:00"}, 
               {key:5, contents:"16:00"}];
  return (
   <div className="App">
    <div className="modalContent-wrapper">
      {/*TODO 좌석번호 데이터받아유 */}
      <h1 className="formTitle-wrapper">좌석번호 7</h1>
      <div className="formContent-wrapper"><Form identification='' title='이름' type='text' formHint='이름' /></div>
      <div className="formContent-wrapper"><Form identification='' title='퇴실시간' type='select' formHint='예상퇴실시간' dataSet={set} /></div>
      <div className="formButton-wrapper"><TextButton buttonType="submit" title="Check In" clickEvent="#" /></div>
    </div>
  </div>
  );
};

export default RegistrationForm;
