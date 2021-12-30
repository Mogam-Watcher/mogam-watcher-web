import React, { createContext } from 'react';
import './App.css';
import Seats from './models/Seats';


const SeatContext = createContext();
const App = () => {
  const seats = new Seats(12);
  return (
    <SeatContext.Provider value={(seats)}>
      <div className="App">
        <h1>Mogam watcher application</h1>
      </div>
    </SeatContext.Provider>
  );
}
export {SeatContext};
export default App;