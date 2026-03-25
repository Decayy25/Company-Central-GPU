import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom";

// components
import Header from "./components/Header"
import Footer from "./components/Footer"
// import LoadingScreen from "./components/LoadingScreen"

// pages
import AboutUs from './pages/AboutUs';

// Style
import './App.css'

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
        <Route path="/" element={<AboutUs />} />
      </Routes>

      <Footer />
    </>
  )
};