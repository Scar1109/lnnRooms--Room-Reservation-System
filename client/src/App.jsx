import './App.css';
import Navbar from './components/Navbar';
import{BrowserRouter, Route, Routes} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import LandingScreen from './screens/LandingScreen';
import BookingScreen from './screens/BookingScreen';
import RegistrationPage from './screens/RegistrationPage';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import AdminScreen from './screens/AdminScreen';

function App() {


  return (
    <div className="App">
        <Navbar/>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/home" element={<HomeScreen />} exact />
            <Route path="/" element={<LandingScreen />} exact />
            <Route path="/book/:roomId/:fromDate/:toDate" element={<BookingScreen />} exact />
            <Route path='/register' element={<RegistrationPage />} exact />
            <Route path='/login' element={<LoginScreen />} exact />
            <Route path='/profile' element={<ProfileScreen />} exact />
            <Route path="/admin/*" element={<AdminScreen />} />
          </Routes>
        </BrowserRouter>    
    </div>
  );
}

export default App;
