import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import History from './components/History';
import Main from './components/Main';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Router>
  );
}

export default App;
