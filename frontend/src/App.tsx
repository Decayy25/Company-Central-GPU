import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom";

// components
import header from "./components/header"
import footer from "./components/footer"
import loading_screen from "./components/loading_screen"


// pages
import home from "./pages/home"
import portfolio from './pages/portfolio';
import about_us from './pages/about_us';
import visi_misi from './pages/visi_misi';


// Style
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  if (isLoading) return <loading_screen />;
  return (
    <>
    <header />
    <Routes>
      <Route path="/" element={<home />} />

    </Routes>
    <footer />
    </>
  )
};