import {google} from 'googleapis';

const auth = new google.auth.GoogleAuth({
  keyFile: "../../util/credentials.json",
  scopes: "https://www.googleapis.com/auth/spreadsheets"
});

const spreadsheetId = "<SPREADSHEET-ID>"

async function getSpreadsheetData(tableRange) {
  
  const client = await auth.getClient();
  
  const googleSheets = google.sheets({version: "v4", auth: client});
  
  const dataFromSheet = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range : `<SHEET NAME>!${tableRange}`
  });
  
  return dataFromSheet.data;
}

async function updateSpreadsheetData(data){
  
  const client = await auth.getClient();
  
  const googleSheets = google.sheets({version: "v4", auth: client});
  
  await googleSheets.spreadsheets.values.update({
    auth,
    spreadsheetId,
    range : `<SHEET NAME>!${data.tableRange}`,
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
    range : `<SHEET NAME>!${data.tableRange}`,
  })
}

export default {getSpreadsheetData, updateSpreadsheetData, deleteSpreadsheetData};
