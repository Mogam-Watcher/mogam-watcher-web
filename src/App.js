import './App.css';
import SeatMap from './components/SeatMap/SeatMap';

function App() {
  const event = () => {
    alert("Sherlock, did you miss me?");
  };

  return (
    <div className="App">
      <SeatMap />
    </div>
  );
}

export default App;
