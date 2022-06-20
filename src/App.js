import React from "react";
import Home from "./pages/Home";
import {Routes, Route} from 'react-router-dom'
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sales from "./pages/Sales";
import Contact from "./pages/Contact";
import Web from "./pages/Web";
import Internet from "./pages/Internet";
import Darkweb from "./pages/Darkweb";
import Cybercrime from "./pages/Cybercrime";
import Function from "./pages/Function";
import Cybersecurity from "./pages/Cybersecurity";

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
        <Route path="/internet" element={<Internet />}></Route>
        <Route path="/darkweb" element={<Darkweb />}></Route>
        <Route path="/function-of-the-internet" element={<Function />}></Route>
        <Route path="/cybercrime" element={<Cybercrime />}></Route>
        <Route path="/cybersecurity" element={<Cybersecurity />}></Route>
      </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
