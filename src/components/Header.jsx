import { useState } from "react";
import clsx from "clsx";
import parse from "html-react-parser";

import { icons } from "../assets/icon/home";

// Components
import Navbar from "./Navbar";
import MenuModal from "./MenuModal";

export default function Header({ language, setLanguage }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const headerClass = clsx({
    "header-about": activeSection === "about-me",
    "header-projects": activeSection === "projects",
    "header-contact": activeSection === "contact",
  });

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
      <header className={headerClass}>
        <div className="logo">{parse(icons.mix)}</div>
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
