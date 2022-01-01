import React,{ useContext, useState } from 'react';
import Form from '../../components/Form/Form';
import BaseButton from '../../components/BaseButton/BaseButton';
import './ExtensionCheckout.css';
import { SeatContext } from '../SeatDisplay/SeatDisplay';
import FirebaseLoader from '../../util/FirebaseLoader';

const ExtensionCheckout = ({seatNumber}) => {
  const [endTime, setEndTime] = useState();
  const seatArray = useContext(SeatContext);
  const userName = seatArray[seatNumber].userName;
  console.log(seatArray[seatNumber]);

  function getEndTimeSet() {
    const currentTime = new Date().getHours();
    const maxEndTime = 24;
    const endTimeSet = [];
    for(var i = 0; i < maxEndTime - currentTime; i++){
      endTimeSet[i] = {key: i + 1, contents: `${currentTime + i + 1}:00`};
    }
    return endTimeSet;
  }
  const extension = () => {
    const confirmMessage = `${userName}님 ${seatNumber}번 자리 ${endTime}까지 연장하시겠습니까?`
    //TODO 유효성검사
    if(typeof endTime === 'undefined'){
      alert('예상 퇴실시간을 입력해주세요');
    } else if(confirm(confirmMessage)){
      //TODO 스프레드시트 업데이트
      FirebaseLoader.updateTable(seatNumber, userName, endTime, true);
      alert(`${userName}님 ${seatNumber}번 자리 ${endTime}까지 연장되셨습니다.`)
    }
  }
  const checkOut = () => {
    const confirmMessage = `${userName}님 ${seatNumber}번 자리 취소하시겠습니까?`
    if(confirm(confirmMessage)){
      //TODO 스프레드시트 업데이트
      FirebaseLoader.deleteTable(seatNumber);
      alert(`${userName}님 ${seatNumber}번 자리 취소되었습니다.`)
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
         title='연장시간' 
         type='select' 
         formHint='희망연장시간' 
         dataSet={getEndTimeSet()} 
         isDisabled={false}
         setData={setEndTime}
        />
      </div>
      <div className="checkoutModal-item" id="extensionButton">
        <BaseButton
         buttonType="submit" 
         title="Extension" 
         clickEvent={extension} 
        />
      </div>
      <hr className="horizontalRules"/>
      <div className="checkoutModal-item" id="checkoutButton">
        <BaseButton
         buttonType="submit" 
         title="Check Out" 
         clickEvent={checkOut} 
        />
      </div>
    </div>
  );
};

export default ExtensionCheckout;
