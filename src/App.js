import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/navbar.component";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader/loader.component";
import { Home } from "./components/exportPages.component";
import Destinations from "./components/pages/Home/Destinations/destinations.component";
import Footer from "./components/Footer/footer.component";
import "./App.css";

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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinations" element={<Destinations />} />
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
}
