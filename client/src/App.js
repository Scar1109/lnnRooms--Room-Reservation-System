import './App.css';
import Navbar from './components/Navbar';
import{BrowserRouter, Route, Routes} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import LandingPage from './screens/LandingPage';
import BookingScreen from './screens/BookingScreen';
import RegistrationPage from './screens/RegistrationPage';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';

function App() {


  return (
    <div className="App">
        <Navbar/>

        <BrowserRouter>
          <Routes>

            <Route path="/home" element={<HomeScreen />} exact />
            <Route path="/" element={<LandingPage />} exact />
            <Route path="/book/:roomId/:fromDate/:toDate" element={<BookingScreen />} exact />
            <Route path='/register' element={<RegistrationPage />} exact />
            <Route path='/login' element={<LoginScreen />} exact />
            <Route path='/profile' element={<ProfileScreen />} exact />
          </Routes>
        </BrowserRouter>    
    </div>
  );
}

export default App;
