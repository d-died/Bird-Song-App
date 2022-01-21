import './App.css';
import BirdSong from './Components/BirdSong';
import NavBar from './Components/NavBar';
import BirdCard from './Components/BirdCard';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <NavBar />
        <Routes>
          <Route path='/' element={ <BirdCard /> }/>
          <Route path="/bird" element={ <BirdSong /> }/>
        </Routes>
    </div>
  );
}
// in the return, I need to 
export default App;
