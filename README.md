## Google Spreadsheet Testing Background Setup

**File Structure**

- Download credential.json, env.mjs and .env from our slack
- The file structure should be as follows:

```
src
└─── componenets
│        ...
│
└─── util
    ├── .env
    ├── credentials.json (google api key)
    ├── env.mjs (a js file for using dotenv in ES module background)
    └── GoogleSpreadsheetLoader.mjs
```

- Write this code at the end of GoogleSpreadsheetLoader.mjs to test getSpreadsheeData function

```
const data = getSpreadsheetData(TableNumber);
data.then((e)=>{
  console.log(e);
})
```

- Write this code at the end of GoogleSpreadsheetLoader.mjs to test updateSpreadsheeData function
  `updateSpreadsheetData(tableNumber,["고길동","10:00"]);`

- Write this code at the end of GoogleSpreadsheetLoader.mjs to test deleteSpreadsheeData function
  `deleteSpreadsheetData(tableNumber);`

- Enter this in the util folder
  `node GoogleSpreadsheetLoader.mjs`
