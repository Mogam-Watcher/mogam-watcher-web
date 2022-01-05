import React, { useContext, useState } from 'react';
import Form from '../../components/Form/Form';
import BaseButton from '../../components/BaseButton/BaseButton';
import './RegistrationForm.css';
import FirebaseLoader from '../../util/FirebaseLoader';

const RegistrationForm = ({seatNumber, hide}) => {
  const [userName, setUserName] = useState();
  const [endTime, setEndTime] = useState();

  function getEndTimeSet() {
    const currentTime = new Date().getHours();
    const maxEndTime = 24;
    const endTimeSet = [];
    for(var i = 0; i < maxEndTime - currentTime; i++){
      endTimeSet[i] = {key: i + 1, contents: `${currentTime + i + 1}:00`};
    }
    endTimeSet.push({key: endTimeSet.length + 1, contents: 'none'});
    return endTimeSet;
  }
  
  const checkIn = () => {
    const confirmMessage = `${userName}님 ${seatNumber}번 자리 ${endTime}까지 사용하시겠습니까?`
    //TODO 유효성검사
    if(typeof userName === 'undefined'){
      alert('이름을 입력해주세요');
    } else if(typeof endTime === 'undefined'){
      alert('예상 퇴실시간을 입력해주세요');
    } else if(confirm(confirmMessage)){
      FirebaseLoader.updateTable(seatNumber, userName, endTime, true);
      alert(`${userName}님 ${seatNumber}번 자리 ${endTime}까지 사용하실 수 있습니다.`)
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
         title="체 크 인" 
         clickEvent={checkIn} 
        />
      </div>
    </div>
  );
};

export default RegistrationForm;