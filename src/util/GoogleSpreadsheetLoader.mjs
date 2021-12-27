import { google } from 'googleapis';
import './env.mjs';

const auth = new google.auth.GoogleAuth({
  keyFile: process.env.CREDENTIAL_PATH,
  scopes: "https://www.googleapis.com/auth/spreadsheets"
});

const tableInfoScheme = [
  {
  tableNumber: 0,
  tableRange:"C6:D6"
  },
  {
    tableNumber: 1,
    tableRange:"C8:D8"
  },
  {
    tableNumber: 2,
    tableRange:"C10:D10"
  },
  {
    tableNumber: 3,
    tableRange:"C12:D12"
  },
  {
    tableNumber: 4,
    tableRange:"C14:D14"
  },
  {
    tableNumber: 5,
    tableRange:"C16:D16"
  },
  {
    tableNumber: 6,
    tableRange:"C18:D18"
  },
  {
    tableNumber: 7,
    tableRange:"C20:D20"
  },
  {
    tableNumber: 8,
    tableRange:"C22:D22"
  },
  {
    tableNumber: 9,
    tableRange:"C24:D24"
  },
  {
    tableNumber: 10,
    tableRange:"C26:D26"
  },
  {
    tableNumber: 11,
    tableRange:"C28:D28"
  },
]

const spreadsheetId = process.env.SPREADSHEET_ID;

async function getSpreadsheetData(number) {
  
  const client = await auth.getClient();
  
  const googleSheets = google.sheets({version: "v4", auth: client});
  
  if(number == tableInfoScheme[number].tableNumber){
    const dataFromSheet = await googleSheets.spreadsheets.values.get({
      auth,
      spreadsheetId,
      range : `시트1!${tableInfoScheme[number].tableRange}`
    });
    
    return dataFromSheet.data;
  }

  
}

async function updateSpreadsheetData(number, data) {

  const client = await auth.getClient();
  
  const googleSheets = google.sheets({version: "v4", auth: client});

  if(number == tableInfoScheme[number].tableNumber){
    googleSheets.spreadsheets.values.update({
      auth,
      spreadsheetId,
      range: `시트1!${tableInfoScheme[number].tableRange}`,
      valueInputOption: 'USER_ENTERED',
      resource: {
        values: [
          data
        ]
      }
    })
  }
  
}

async function deleteSpreadsheetData(number) {
  
  const client = await auth.getClient();
  
  const googleSheets = google.sheets({version: "v4", auth: client});
  if(number == tableInfoScheme[number].tableNumber){
    await googleSheets.spreadsheets.values.clear({
      auth,
      spreadsheetId,
      range : `시트1!${tableInfoScheme[number].tableRange}`,
    })
  }
}

const get = getSpreadsheetData(5);
get.then((e)=>{
 console.log(e);
})

export default {getSpreadsheetData, updateSpreadsheetData, deleteSpreadsheetData};
