const {google} = require( "googleapis" );

const auth = new google.auth.GoogleAuth({
  keyFile: "credentials.json",
  scopes: "https://www.googleapis.com/auth/spreadsheets"
});

const spreadsheetId = "<SPREADSHEET-ID>"
/*
The input dataset must be like these.  
const table0 = {
  tableRange:"C6:D6",
  dataToUpdate: ["마마마","12:00"]
}
const table1 = {
  tableRange:"C8:D8",
  dataToUpdate: ["헤이마마","14:00"]
}
Usage
getSpreadsheetData(table1);
updateSpreadsheetData(table0);
deleteSpreadsheetData(table0);
*/

async function getSpreadsheetData(data) {
  
  const client = await auth.getClient();
  
  const googleSheets = google.sheets({version: "v4", auth: client});
  
  const metaData = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range : `시트1!${data.tableRange}`
  })
  
  console.log(metaData.data);
  return metaData.data;
}

async function updateSpreadsheetData(data){
  const client = await auth.getClient();
  
  const googleSheets = google.sheets({version: "v4", auth: client});
  
  await googleSheets.spreadsheets.values.update({
    auth,
    spreadsheetId,
    range : `시트1!${data.tableRange}`,
    valueInputOption:'USER_ENTERED',
    resource:{
      values:[
        data.dataToUpdate
      ]
    }
  })
}

async function deleteSpreadsheetData(data){
  const client = await auth.getClient();
  
  const googleSheets = google.sheets({version: "v4", auth: client});
  
  await googleSheets.spreadsheets.values.clear({
    auth,
    spreadsheetId,
    range : `시트1!${data.tableRange}`,
  })
}

module.exports = {getSpreadsheetData, updateSpreadsheetData, deleteSpreadsheetData};

