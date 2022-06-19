import React from "react";
import Home from "./pages/Home";
import {Routes, Route} from 'react-router-dom'
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sales from "./pages/Sales";
import Contact from "./pages/Contact";
import Web from "./pages/Web";

function App() {
  return (
    <div>
      <Header />
      <div className="min-h-screen">
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/sales" element={<Sales />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/web" element={<Web />}></Route>
      </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
