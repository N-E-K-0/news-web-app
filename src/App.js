import React, {useState} from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/home';
import ReadLater from './pages/read-later';
import logo from './logo.svg';
import './App.css';

function App() {
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState();
  const [readLater, setReadLater] = useState();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home setReadLater={setReadLater} readLater={readLater} setModal={setModal} setModalData={setModalData}/> } />
        <Route path="read-later" element={ <ReadLater readLater={readLater} setModal={setModal} setModalData={setModalData}/> } />
      </Routes>
    </div>
  );
}

export default App;
