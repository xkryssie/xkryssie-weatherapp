import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Weather from './components/Weather'

function App() {
  return (
      <div className='wrapper'>
        <Router>
          <Routes>
            <Route path='/' element={<Weather/>}/>
          </Routes>
        </Router>
      </div>
  );
}

export default App;