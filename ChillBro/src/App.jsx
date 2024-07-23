import { useState } from "react";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { About } from "./components/About";
import { Contacts } from "./components/Contacts";
// import { Gallery } from "./components/Gallery";
import { Footer } from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <About />
        {/* <Gallery /> */}
        <Contacts />
        <Footer />
        <Routes>
          <Route path="/" exact />
        </Routes>
      </Router>
    </>
  );
}

export default App;
