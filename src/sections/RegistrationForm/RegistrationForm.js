import React, { useContext, useState } from 'react';
import Form from '../../components/Form/Form';
import BaseButton from '../../components/BaseButton/BaseButton';
import './RegistrationForm.css';
import { SeatContext } from '../SeatDisplay/SeatDisplay';
import FirebaseLoader from '../../util/FirebaseLoader';

const RegistrationForm = ({seatNumber, hide}) => {
  const [userName, setUserName] = useState();
  const [endTime, setEndTime] = useState();
  const seats = useContext(SeatContext);

  function getEndTimeSet() {
    const currentTime = new Date().getHours();
    const maxEndTime = 24;
    const endTimeSet = [];
    for(var i = 0; i < maxEndTime - currentTime; i++){
      endTimeSet[i] = {key: i + 1, contents: `${currentTime + i + 1}:00`};
    }
    return endTimeSet;
  }
  
  const checkIn = () => {
    const confirmMessage = `${userName}님 ${seatNumber}번 자리 ${endTime}까지 신청하시겠습니까?`
    //TODO 유효성검사
    if(typeof userName === 'undefined'){
      alert('이름을 입력해주세요');
    } else if(typeof endTime === 'undefined'){
      alert('예상 퇴실시간을 입력해주세요');
    } else if(confirm(confirmMessage)){
      //TODO 스프레드시트 업데이트
      FirebaseLoader.updateTable(seatNumber, userName, endTime, true);
      alert(`${userName}님 ${seatNumber}번 자리 ${endTime}까지 신청되셨습니다.`)
      hide();
    }
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
         formValue='' 
         isDisabled={false} 
         setData={setUserName}
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
         setData={setEndTime} 
        />
      </div>
      <div className="checkInModal-item">
        <BaseButton 
         buttonType="submit" 
         title="Check In" 
         clickEvent={checkIn} 
        />
      </div>
    </div>
  );
};

export default RegistrationForm;
