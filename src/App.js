import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Problem from "./Components/Problem";
import Guidelines from "./Components/Guidelines";
import NavBar from "./Components/NavBar";
import Register from "./Components/Register";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
    <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/problem" element={<Problem></Problem>}></Route>
        <Route path="/guidelines" element={<Guidelines></Guidelines>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
