// import Loader from "../../utilities/Loader.mjs";
// import credentialKey from'../../utilities/config.mjs';
// console.log(credentialKey);

import Loader from "../../utilities/GoogleSpreadsheetLoader.mjs";

class Seats {
    constructor(totalSeat) {
      this.totalSeat = totalSeat;
      this.countVacantSeat = totalSeat;
      this.seats = new Array();
      seatsInit(totalSeat, this.seats);
      countVacantSeat(this);
    }
  }
  
  function countVacantSeat(Seats) {
    for(let seat of Seats.seats){
      if(seat.isOccupied){
        Seats.countVacantSeat--;
      }
    }
  }
  
  function isOccupiedSeat(seatData) {
    if(seatData.length === 2){
      return false;
    }
    return true;
  }
  
  function sheetPaser(seatData) {
    const data = seatData.split(',');
    data[0] = data[0].substring(2, 5);
    if(data[1].length == 7){
      data[1] = data[1].slice(1,5);
    } else {
      data[1] = data[1].slice(1,6)
    }
    return data;
  }
  
  function getTableRange(seatNumber) {
    const index = [6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28];
    return `!C${index[seatNumber]}:D${index[seatNumber]}`;
  }
  
  function seatsInit(totalSeat, seats) {
    for (let i = 0; i < totalSeat; i ++){
      let data = JSON.stringify(testDataSet.values[(i * 2)]);
      let isOccupied = isOccupiedSeat(data);
      let tableRange = getTableRange(i);
      if(isOccupied){
        data = sheetPaser(data);
        seats[i] = { seatNumber: i, userName: data[0], endTime: data[1], isOccupied: isOccupied, tableRange: tableRange};
      } else {
        seats[i] = { seatNumber: i, userName: '', endTime: '', isOccupied: isOccupied, tableRange: tableRange};
      }
    }
  }

  // const loader = new Loader(process.env.SPREADSHEET_ID,process.env.CREDENTIAL_PATH);
  // loader.authorization();
  // console.log(loader.getsheetid);
const get = Loader.getSpreadsheetData(3);
get.then((e)=>{
  console.log(e)
})

  export default Seats;
