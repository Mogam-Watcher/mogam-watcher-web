import {google} from 'googleapis';

const auth = new google.auth.GoogleAuth({
  keyFile: "./credentials.json",
  scopes: "https://www.googleapis.com/auth/spreadsheets"
});

const spreadsheetId = "1WZA7BAh1WESgTuWmFDI9lSR92Ub87gur2ct-a1YqB3c"

async function getSpreadsheetData(tableRange) {
  
  const client = await auth.getClient();
  
  const googleSheets = google.sheets({version: "v4", auth: client});
  
  const dataFromSheet = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range : `시트1!${tableRange}`
  });
  
  return dataFromSheet.data;
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

// const testData = {
//   tableRange:"C6:D6",
//   dataToUpdate: ["홍길동","10:00"]
// }

// // deleteSpreadsheetData(testData);
// updateSpreadsheetData(testData);
const data = getSpreadsheetData("C6:D6");
data.then((e)=>{
  console.log(e);
})
export default {getSpreadsheetData, updateSpreadsheetData, deleteSpreadsheetData};
