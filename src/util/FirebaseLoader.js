import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, setDoc, query, where, doc } from 'firebase/firestore';

const firebaseConfig = {

  apiKey: process.env.API_KEY,

  authDomain: process.env.AUTH_DOMAIN,

  databaseURL: process.env.DATABASE_URL,

  projectId: process.env.PROJECT_ID,

  storageBucket: process.env.STORAGE_BUCKET,

  messagingSenderId: process.env.MESSAGING_SENDER_ID,

  appId: process.env.APP_ID,

  measurementId: process.env.MESSURMENT_ID

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const tablesCollectionRef = collection(db, "tables");

const getTables = async () => {

  let tempArray = [];

  const data = await getDocs(tablesCollectionRef);

  data.docs.map((doc) => {
    tempArray.push({...doc.data(), id:doc.id});
  });

  return tempArray;

};

const searchTable = async (number) => {

  let tempArray = [];

  const firebaseQuery = query(tablesCollectionRef, where("tableNumber", "==", number));

  const querySnapshot = await getDocs(firebaseQuery);

  querySnapshot.forEach((doc) => {
    tempArray.push({...doc.data(), id:doc.id});
  });

  return tempArray;

}

const updateTable = async (number, name, time) => {

  const dataToUpdate = {
    tableNumber: number,
    name: name,
    endTime: time,
  }

  const tableDoc = doc(db,"tables", `${number}`);
  
  await setDoc(tableDoc, dataToUpdate);

}

const deleteTable = async (number) => {

  const dataToUpdate = {
    tableNumber: number,
    name: "",
    endTime: "",
  }

  const tableDoc = doc(db,"tables", `${number}`);

  await setDoc(tableDoc,dataToUpdate);

}

export default { getTables, updateTable, deleteTable, searchTable };
