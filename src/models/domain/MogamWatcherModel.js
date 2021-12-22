
import loader from './util/GoogleSpreadsheetLoader'
const table0 = {
    tableRange:"C6:D6",
    dataToUpdate: ["마마마","12:00"]
  }

class MogamWatcherModel {
  
  getTableData(){
    const data = loader.getSpreadsheetData(table0);
    console.log(data);
  }

}

export default MogamWatcherModel;
