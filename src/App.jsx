import "./index.css";
import { useState } from "react";

// Components
import Header from "./Header";
import MainSection from "./MainSection";
import Footer from "./Footer";

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
