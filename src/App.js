import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CustomNav from './Components/CustomNav';
import Home from './Components/Home';
import About from './Components/About';
import Problem from './Components/Problem';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/problem' element={<Problem></Problem>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
