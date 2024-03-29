import React from 'react';
import './App.css';
import Footer from './sections/Footer/Footer';
import Header from './sections/Header/Header';
import SeatDisplay from './sections/SeatDisplay/SeatDisplay';
import FirebaseLoader from './util/FirebaseLoader';

FirebaseLoader.refreshDatabase();

const App = () => {
  // TODO remove & data binding
  const title = `공지사항`;
  const content = `✭ 2G Regel ✭\n
  1)  2차 백신 접종 후 14일 경과
  2)  코로나 완치 판정을 판은 경우\n
  이 둘 중 하나에 해당되시는 분들께서만 이용하실 수 있습니다. 
  코로나테스트 면제대상자 명단이 작성되고 있습니다.
  (작성자 :이무석)\n
  1) 또는 2), 즉 코로나 완전 접종 후 14일이 지나셨거나, 
  코로나 완치판정을 받으신 분들께서는 명단 작성자에게 따로 알려주시면 감사하겠습니다. 
  명단에는 Geimpft와 Genesen중 어디에 해당되시는지 따로 표기되지는 않으며, 
  대상자의 이름과 작성자가 확인한 날짜만 표기됩니다. 
  2G 관련 Nachweis가 없으신 경우 목암 사용이 불가능합니다.\n
    
  1. 총 12개의 좌석 중  스탭 자리(0)를 제외한 나머지 11개 좌석을 사용할 수 있습니다. 
  목암은 학기중에는 13시부터 운영됩니다.
  2. 2021년 11월 22일부터 다시 예약제가 아닌 선착순으로 운영됩니다.
  이제부터 따로 예약 없이, 목암 운영 시간에 오셔서 빈자리를 이용하시면 됩니다.\n
  입장 및 퇴장 시:
  1) 목암 문 옆에 있는 스텝 자리에서 방문 기록지를 작성해 주세요.
  2) 목암 자리 현황표에 본인이 사용하는 책상 번호에 맞게 이름을 적어주세요.
  3) 퇴장 시에도 현황표에 쓰여진 자신의 이름을 반드시 지워주세요.
  4) 본인이 오늘 목암을 언제까지 사용할 것인지 알고 있다면 예상 퇴장 시간을 적어주세요.
  (예상 시간 작성은 선택사항이며, 이 시간을 지키지 않아도 괜찮습니다.
  목암 자리 현황표는 실시간으로 목암에 자리가 있는지 확인하기 위한 용도입니다. 
  원활한 목암 사용을 위해 입장 및 퇴장 시 현황표 수정을 반드시 해주시기 바랍니다. 
  장시간 (2시간 이상) 자리를 비울 시 다른 사람들이 이용할 수 있게 짐을 치워주세요.)`;
  const names = ["Eunae Jang","Gyumin Lee","Hyejin Kang","Hyun Kim","Se Rin Yang","Sungdae Kim","Yoseob Shim"]
  
  return (
    <div className="App">
      <Header noticeTitle={title} noticeContent={content} />
      <SeatDisplay total='12'/>
      <Footer year={2022} nameList={names}/>
    </div>
  );
}
export default App;
