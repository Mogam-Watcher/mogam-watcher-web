const testDataSet = {
  range: "'시트1'!C6:D29",
  majorDimension: 'ROWS',
  values: [
    [ '홍길동', '10:00' ], [],
    [ '공간남', '9:00' ],  [],
    [ '공간남', '9:00' ],  [],
    [ '1홍길동', '11:00' ], [],
    [ '2홍길동', '11:00' ], [],
    [ '3홍길동', '11:00' ], [],
    [ '4홍길동', '11:00' ], [],
    [ '5홍길동', '11:00' ], [],
    [ '6홍길동', '11:00' ], [],
    [ '7홍길동', '11:00' ], [],
    [], [],
    [ '8홍길동', '11:00' ]
  ]
};

class Seats {
  constructor(total) {
    this.total = total;
    this.countFreeSeat = total;
    this.seats = new Array();

    for (let i = 0; i < total; i ++){
      let data = JSON.stringify(testDataSet.values[(i * 2)]);
      let isUsed = isUsedSeat(data);
      let tableRange = getTableRange(i);
    
      if(isUsed){
        data = sheetPaser(data);
        this.seats[i] = { number: i, userName: data[0], endTime: data[1], isUsed: isUsed, tableRange: tableRange};
      } else {
        this.seats[i] = { number: i, userName: '', endTime: '', isUsed: isUsed, tableRange: tableRange};
      }
      console.log(this);
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
  if(seatData.length === 2){
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
