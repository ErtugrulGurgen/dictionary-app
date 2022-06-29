import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import History from './components/History';
import Main from './components/Main';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="dictionary-app/" element={<Main/>} />
        <Route path="dictionary-app/history" element={<History />} />
      </Routes>
    </Router>
  );
}

export default App;
