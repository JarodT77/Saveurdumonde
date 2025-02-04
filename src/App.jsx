import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Restaurant from "./pages/Restaurant";


function App() {
  return (
    <Router>
      <Header /> {/* Header visible sur toutes les pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/restaurant" element={<Restaurant />} />
     
      </Routes>
      <Footer /> {/* Footer visible sur toutes les pages */}
    </Router>
  );
}

export default App;
