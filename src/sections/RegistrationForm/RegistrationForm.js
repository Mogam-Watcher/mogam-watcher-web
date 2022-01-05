import React, { useContext, useState, useRef } from 'react';
import Form from '../../components/Form/Form';
import BaseButton from '../../components/BaseButton/BaseButton';
import './RegistrationForm.css';
import FirebaseLoader from '../../util/FirebaseLoader';

const RegistrationForm = ({seatNumber, hide}) => {
  const [userName, setUserName] = useState();
  const [endTime, setEndTime] = useState();
  const inputRef = useRef();

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

    if(typeof userName === 'undefined'){
      alert("이름을 입력해주세요.");
      inputRef.current.focus();
      return false;
    } 
    if(userName.length <= 1) {
      alert("이름을 두 글자 이상 입력해 주세요.");
      inputRef.current.focus();
      return false;
    } 
    let replaceSpecialLetter 
      = /[~!@\#$%^&*\()\-=+_'\;<>0-9\/.\`:\"\\,\[\]?|{}]/gi;
    if(userName.match(replaceSpecialLetter)) {
      alert("이름에 숫자나 특수기호가 포함되어 있습니다.");
      inputRef.current.focus();
      return false;
    }
    let replaceNotFullKorean
      = /[ㄱ-ㅎㅏ-ㅣ]/gi;
    if(userName.match(replaceNotFullKorean)) {
      alert("이름이 잘못 표기되었습니다.");
      inputRef.current.focus();
      return false;
    }
    if(typeof endTime === 'undefined'){
      alert('예상 퇴실시간을 입력해주세요');
    } else if(confirm(confirmMessage)){
      FirebaseLoader.updateTable(seatNumber, userName, endTime, true);
      alert(`${userName}님 ${seatNumber}번 자리 ${endTime}까지 사용하실 수 있습니다.`);
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
        inputRef={inputRef}
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
