import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Details from './components/Details';
import Main from './components/Main';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
