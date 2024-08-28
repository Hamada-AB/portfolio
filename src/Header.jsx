import { useState, useEffect } from "react";

// Components
import Navbar from "./Navbar";
import MenuModal from "./MenuModal";

export default function Header({ language, setLanguage }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [position, setPosition] = useState(0);

  console.log(position);

  function getPosition() {
    setPosition(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", getPosition);

    return () => {
      window.removeEventListener("scroll", getPosition);
    };
  }, []);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "EN" ? "IT" : "EN"));
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // To detect the active section
  const handleSetActive = (to) => {
    setActiveSection(to);
  };

  return (
    <>
      <header className={position > 700 ? "scroll-down" : ""}>
        <div className="logo">HA</div>
        <div className="menu-icon" onClick={toggleModal}>
          &#9776;
        </div>

        <Navbar
          language={language}
          activeSection={activeSection}
          handleSetActive={handleSetActive}
        />

        <div className="header-btns">
          <button onClick={toggleLanguage} className="language-toggle">
            {language === "EN" ? "IT" : "EN"}
          </button>
        </div>
      </header>

      {isModalOpen && (
        <MenuModal
          isModalOpen={isModalOpen}
          toggleModal={toggleModal}
          activeSection={activeSection}
          language={language}
          toggleLanguage={toggleLanguage}
        />
      )}
    </>
  );
}
