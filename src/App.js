import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Problem from "./Components/Problem";
import Guidelines from "./Components/Guidelines";
import NavBar from "./Components/NavBar";
import Register_Coming from "./Components/Register_Coming"
import Timeline from "./Components/Timeline";
import './App.css'
function App() {
  return (
    <BrowserRouter>
    <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/problem" element={<Problem></Problem>}></Route>
        <Route path="/guidelines" element={<Guidelines></Guidelines>}></Route>
        <Route path="/register" element={<Register_Coming></Register_Coming>}></Route>
        <Route path="/timeline" element={<Timeline></Timeline>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
