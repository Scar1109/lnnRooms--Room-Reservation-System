import './App.css';
import Navbar from './components/Navbar';
import{BrowserRouter, Route, Routes} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <div className="App">
        <Navbar/>

        <BrowserRouter>
          <Routes>

            <Route path="/home" element={<HomeScreen />} exact />
            
          </Routes>
        </BrowserRouter>    
    </div>
  );
}

export default App;
