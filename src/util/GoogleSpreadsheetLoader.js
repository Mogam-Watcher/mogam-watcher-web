import {google} from 'googleapis';

const auth = new google.auth.GoogleAuth({
  keyFile: "./credentials.json",
  scopes: "https://www.googleapis.com/auth/spreadsheets"
});

const tableInfoScheme = [
  {
  tableNumber: 0,
  tableRange:"C6:D6",
  dataToUpdate: ["홍길동","10:00"]
  },
  {
    tableNumber: 1,
    tableRange:"C8:D8",
    dataToUpdate: ["",""]
  },
  {
    tableNumber: 2,
    tableRange:"C10:D10",
    dataToUpdate: ["",""]
  },
  {
    tableNumber: 3,
    tableRange:"C12:D12",
    dataToUpdate: ["",""]
  },
  {
    tableNumber: 4,
    tableRange:"C14:D14",
    dataToUpdate: ["",""]
  },
  {
    tableNumber: 5,
    tableRange:"C16:D16",
    dataToUpdate: ["",""]
  },
  {
    tableNumber: 6,
    tableRange:"C18:D18",
    dataToUpdate: ["",""]
  },
  {
    tableNumber: 7,
    tableRange:"C20:D20",
    dataToUpdate: ["",""]
  },
  {
    tableNumber: 8,
    tableRange:"C22:D22",
    dataToUpdate: ["",""]
  },
  {
    tableNumber: 9,
    tableRange:"C24:D24",
    dataToUpdate: ["",""]
  },
  {
    tableNumber: 10,
    tableRange:"C26:D26",
    dataToUpdate: ["",""]
  },
  {
    tableNumber: 11,
    tableRange:"C28:D28",
    dataToUpdate: ["",""]
  },
]

const spreadsheetId = "1WZA7BAh1WESgTuWmFDI9lSR92Ub87gur2ct-a1YqB3c"

async function getSpreadsheetData(number) {
  
  const client = await auth.getClient();
  
  const googleSheets = google.sheets({version: "v4", auth: client});
  
  if(number == tableInfoScheme[number].tableNumber){
    const dataFromSheet = await googleSheets.spreadsheets.values.get({
      auth,
      spreadsheetId,
      range : `시트1!${tableInfoScheme.tableRange}`
    });

    return dataFromSheet.data;
  }
  
  
  
}

async function updateSpreadsheetData(number, data) {

  const client = await auth.getClient();
  
  const googleSheets = google.sheets({version: "v4", auth: client});
  if(number == tableInfoScheme[number].tableNumber){
    await googleSheets.spreadsheets.values.update({
      auth,
      spreadsheetId,
      range : `시트1!${tableInfoScheme.tableRange}`,
      valueInputOption:'USER_ENTERED',
      resource:{
        values:[
          data.dataToUpdate
        ]
      }
    })
  }
  
}

async function deleteSpreadsheetData(data) {
  
  const client = await auth.getClient();
  
  const googleSheets = google.sheets({version: "v4", auth: client});
  
  await googleSheets.spreadsheets.values.clear({
    auth,
    spreadsheetId,
    range : `시트1!${data.tableRange}`,
  })
}

export default {getSpreadsheetData, updateSpreadsheetData, deleteSpreadsheetData};
