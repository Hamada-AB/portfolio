import "./index.css";
import { useState } from "react";

// Components
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";

export default function App() {
  const [language, setLanguage] = useState("EN");

  return (
    <>
      <Header language={language} setLanguage={setLanguage} />

      <MainSection language={language} />

      <Footer />
    </>
  );
}
