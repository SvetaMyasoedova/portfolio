import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import appStyles from "./app.module.css";
import Header from "../header/Header";
import Welcome from "../welcome/Welcome";
import { AboutPage } from "../../pages/aboutPage";
import { ProjectPage } from "../../pages/projectPage";
import { ContactPage } from "../../pages/contactPage";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
