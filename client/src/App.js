import './App.css';
import Navbar from './components/Navbar';
import{BrowserRouter, Route, Routes} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import LandingPage from './screens/LandingPage';

function App() {

  return (
    <div className="App">
        <Navbar/>

        <BrowserRouter>
          <Routes>

            <Route path="/home" element={<HomeScreen />} exact />
            <Route path="/" element={<LandingPage />} exact />
            
          </Routes>
        </BrowserRouter>    
    </div>
  );
}

export default App;
