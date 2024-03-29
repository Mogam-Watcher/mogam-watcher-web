import React,{ useContext, useState } from 'react';
import Form from '../../components/Form/Form';
import BaseButton from '../../components/BaseButton/BaseButton';
import './ExtensionCheckout.css';
import { SeatContext } from '../SeatDisplay/SeatDisplay';
import FirebaseLoader from '../../util/FirebaseLoader';

const ExtensionCheckout = ({seatNumber, hide}) => {
  const [endTime, setEndTime] = useState();
  const seatArray = useContext(SeatContext);
  const userName = seatArray[seatNumber].userName;

 
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
  const extension = () => {
    const confirmMessage = `${userName}님 ${seatNumber}번 자리 ${endTime}까지 사용하시겠습니까?`
    //TODO 유효성검사
    if(typeof endTime === 'undefined'){
      alert('예상 퇴실시간을 입력해주세요');
    } else if(confirm(confirmMessage)){
      FirebaseLoader.updateTable(seatNumber, userName, endTime, true);
      alert(`${userName}님 ${seatNumber}번 자리 ${endTime}까지 사용하실 수 있습니다.`)
      hide();
    }
  }
  const checkOut = () => {
    const confirmMessage = `${userName}님 ${seatNumber}번 자리 취소하시겠습니까?`
    if(confirm(confirmMessage)){
      FirebaseLoader.deleteTable(seatNumber);
      alert(`${userName}님 ${seatNumber}번 자리 취소되었습니다.`);
      hide();
    }
  }
  return (
    <div className="checkoutModal-container">
      <span className="checkoutModal-item" id="checkoutModal-title">
        좌석번호 {seatNumber}
      </span>
      <div className="checkoutModal-item">
        <Form
         identification=''
         title='이름' 
         type='text'  
         isDisabled={true}
         formValue={userName}
        />
        <Form
         identification='' 
         title='변경시간' 
         type='select' 
         formHint='희망변경시간' 
         dataSet={getEndTimeSet()} 
         isDisabled={false}
         setData={setEndTime}
        />
      </div>
      <div className="checkoutModal-item" id="extensionButton">
        <BaseButton
         buttonType="submit" 
         title="변 경"
         clickEvent={extension} 
        />
      </div>
      <hr className="horizontalRules"/>
      <div className="checkoutModal-item" id="checkoutButton">
        <BaseButton
         buttonType="submit" 
         title="체 크 아 웃"
         clickEvent={checkOut} 
        />
      </div>
    </div>
  );
};

export default ExtensionCheckout;
