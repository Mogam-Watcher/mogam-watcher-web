import json from './dummy.json';

const getAllTables = () => {

  let tempArray = [];
  
  json.dummy.map((e) => {
    tempArray.push(e);
  });

  return tempArray;

}

const getTable = (number) => {

  let tempArray = [];

  json.dummy.map((e) => {
    if(e.tableNumber == number){
        return tempArray.push(e);
    }
  });

  return tempArray;

}

const updateTable = (number, name, time) => {

  let tempArray = [];

  let dataToUpdate = {
    "tableNumber": number,
    "name": name,
    "endTime": time 
  };
  
  json.dummy.map((e) => {
    if(e.tableNumber == number){
      e = dataToUpdate;
    }
    tempArray.push(e);
  });
  
  return tempArray;
}

const deleteTable = (number) => {

  let tempArray = [];
  
  let dataToUpdate = {
    "tableNumber": number,
    "name": "",
    "endTime": "" 
  };
    
  json.dummy.map((e) => {
    if(e.tableNumber == number){
      e = dataToUpdate;
    }
    tempArray.push(e);
  });
  
  return tempArray;
}

export default { getAllTables, getTable, updateTable, deleteTable };
