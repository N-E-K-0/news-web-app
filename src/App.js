import { Routes, Route } from "react-router-dom";
import Home from './pages/home';
import ReadLater from './pages/read-later';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="read-later" element={ <ReadLater/> } />
      </Routes>
    </div>
  );
}

export default App;
