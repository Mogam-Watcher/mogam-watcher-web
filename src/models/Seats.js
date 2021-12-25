/* 

const testDataSet = {
  range: "'시트1'!C6:D29",
  majorDimension: 'ROWS',
  values: [
    [ '홍길동', '10:00' ], [],
    [ '구간남', '8:00' ],  [],
    [ '공간남', '9:00' ],  [],
    [ '홍길동', '11:00' ], [],
    [ '홍길동', '11:00' ], [],
    [ '홍길동', '11:00' ], [],
    [ '홍길동', '11:00' ], [],
    [ '홍길동', '11:00' ], [],
    [ '홍길동', '11:00' ], [],
    [ '홍길동', '11:00' ], [],
    [ '홍길동', '11:00' ], [],
    [ '홍길동', '11:00' ]
  ]
};
*/

class Seats {
  constructor(total) {
    this.total = total;
    this.countFreeSeat = total;
    this.seats = new Array();

    for (let i = 0; i < total; i ++){
      let data = JSON.stringify(testDataSet.values[i]);
      if(i % 2 == 1){
        data = JSON.stringify(testDataSet.values[i+1]);
      }
      let isUsed = isUsedSeat(data);
      data = sheetPaser(data);
      let tableRange = getTableRange(i);
      this.seats[i] = { number: i, userName: data[0], endTime: data[1], isUsed: isUsed, tableRange: tableRange};
    }
    countFreeSeat(this);
  }
}

function countFreeSeat(Seats){
  for(let seat of Seats.seats){
    if(seat.isUsed){
      Seats.countFreeSeat--;
    }
  }
}

function isUsedSeat(seatData){
  if(seatData.indexOf(':00') == -1){
    return false;
  }
  return true;
}

function sheetPaser(seatData){
  const data = seatData.split(',');
  data[0] = data[0].substring(2, 5);
  if(data[1].length == 7){
    data[1] = data[1].slice(1,5);
  } else {
    data[1] = data[1].slice(1,6)
  }
  return data;
}

function getTableRange(seatNumber){
  const index = [6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28];
  return `!C${index[seatNumber]}:D${index[seatNumber]}`;
}
export default Seats;
