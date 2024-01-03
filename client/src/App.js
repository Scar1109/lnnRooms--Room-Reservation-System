import './App.css';
import Navbar from './components/Navbar';
import{BrowserRouter, Route, Routes} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import LandingPage from './screens/LandingPage';
import BookingScreen from './screens/BookingScreen';

function App() {


  return (
    <div className="App">
        <Navbar/>

        <BrowserRouter>
          <Routes>

            <Route path="/home" element={<HomeScreen />} exact />
            <Route path="/" element={<LandingPage />} exact />
            <Route path="/book/:roomId" element={<BookingScreen />} exact />
            
          </Routes>
        </BrowserRouter>    
    </div>
  );
}

export default App;
