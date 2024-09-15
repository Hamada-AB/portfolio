import "./index.css";
import { useState, useEffect } from "react";

// Components
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";
import DevelopmentModal from "./components/DevelopmentModal";

export default function App() {
  const [language, setLanguage] = useState("EN");
  const [winWidth, setWinWidth] = useState(window.innerWidth);
  console.log(winWidth);

  function getWinWidth() {
    setWinWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", getWinWidth);
    return () => {
      window.removeEventListener("resize", getWinWidth);
    };
  }, []);

  useEffect(() => {
    // Detect the user's language preference
    const userLang = navigator.language || navigator.userLanguage;

    // Set language based on detected preference
    if (userLang.startsWith("it")) {
      setLanguage("IT");
    } else {
      setLanguage("EN");
    }
  }, []);

  return (
    <>
      {winWidth < 960 && <DevelopmentModal language={language} />}
      <Header language={language} setLanguage={setLanguage} />
      <MainSection language={language} winWidth={winWidth} />
      <Footer />
    </>
  );
}
