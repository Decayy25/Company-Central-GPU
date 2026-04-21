// import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom";

// components
import Header from "./components/Organisms/Header"
import Footer from "./components/Organisms/Footer"
// import LoadingScreen from "./components/LoadingScreen"

// pages
import About from './pages/About';
import Journey from "./pages/Journey";

export default function App() {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => setIsLoading(false), 2000);
  // }, []);

  // if (isLoading) return <LoadingScreen />;

  return (
    <>
      <Header />
      
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/journey" element={<Journey />} />

      </Routes>

      <Footer />
    </>
  )
};