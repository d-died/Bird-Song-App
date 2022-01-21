import './App.css';
import BirdSong from './Components/BirdSong';
import NavBar from './Components/NavBar';
import BirdCard from './Components/BirdCard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <NavBar />
      <Router>
        <Routes>
          <BirdCard path="/bird" element={ BirdSong }/>
          <BirdSong/>
        </Routes>
      </Router>
    </div>
  );
}
// in the return, I need to 
export default App;
