import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Problem from "./Components/Problem";
import Guidelines from "./Components/Guidelines";
import NavBar from "./Components/NavBar";
import Register from "./Components/Register";
import Contact from "./Components/Contact";
import Register_Coming from "./Components/Register_Coming"
import Timeline from "./Components/Timeline";
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
