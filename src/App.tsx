import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import appStyles from "./app.module.css";
import Header from "./components/header/Header";
import Welcome from "./components/welcome/Welcome";
import { AboutPage } from "./pages/aboutPage";

function App() {
  return (
    <div className={appStyles.main}>
      <Header />

      <Routes>
        <Route path="/" element={<Welcome />} />

        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
