import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import KnowledgeBase from "./pages/KnowledgeBase";
import Dashboard from "./pages/Dashboard";
import { Routes, Route } from "react-router-dom";

export default function App() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <>
      <Navbar toggleDark={() => setDarkMode(!darkMode)} dark={darkMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/knowledge" element={<KnowledgeBase />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}
