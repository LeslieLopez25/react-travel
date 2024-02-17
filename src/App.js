import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/navbar.component";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader/loader.component";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  return (
    <Router>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Routes></Routes>
        </>
      )}
    </Router>
  );
}
