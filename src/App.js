import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Main from './components/Main';

function App() {
  return (
    // Router is used, just in case, to further add new routes to the app
    <Router>
      <Routes>
        <Route path="dictionary-app/" element={<Main/>} />
      </Routes>
    </Router>
  );
}

export default App;
