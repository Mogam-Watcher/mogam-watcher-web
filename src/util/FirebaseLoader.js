import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, setDoc, query, where, doc, orderBy } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MESSURMENT_ID
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const tablesCollectionRef = collection(db, "tables");

firebase.initializeApp(firebaseConfig);
export const dbService = firebase.firestore();

const getAllTables = async () => {

  const firebaseQuery = query(tablesCollectionRef, orderBy("tableNumber", "asc"));

  const querySnapShot = await getDocs(firebaseQuery);

  const getData = querySnapShot.docs.map((doc) => ({...doc.data(), id:doc.id}));
  
  return getData;
};

const getTable = async (number) => {

  const firebaseQuery = query(tablesCollectionRef, where("tableNumber", "==", number));

  const querySnapShot = await getDocs(firebaseQuery);

  const getData = querySnapShot.docs.map((doc) => ({...doc.data(), id:doc.id}));
  
  return getData;
}

const updateTable = async (number, name, time, isOccupied) => {

  const dataToUpdate = {
    seatNumber: number,
    userName: name,
    endTime: time,
    isOccupied: isOccupied,
  }

  const tableDoc = doc(db,"tables", `${number}`);
  
  await setDoc(tableDoc, dataToUpdate);

}

const deleteTable = async (number) => {

  const dataToUpdate = {
    seatNumber: number,
    name: "",
    endTime: "",
    isOccupied: false
  }

  const tableDoc = doc(db,"tables", `${number}`);

  await setDoc(tableDoc,dataToUpdate);

}

const getDataToArray = (getFunctions) => {

  const data = getFunctions;

  let arr = [];

  data.then((res) => arr.push(res));

  return arr;
}

export default { getAllTables, updateTable, deleteTable, getTable , getDataToArray};
