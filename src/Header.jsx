import { useState } from "react";

import { Link } from "react-scroll";

export default function Header({ language, setLanguage }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

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
      <header>
        <div className="logo">HA</div>

        <div className="menu-icon" onClick={toggleModal}>
          &#9776;
        </div>

        <nav className="desktop-nav">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className={activeSection === "home" ? "active" : ""}
            onSetActive={() => handleSetActive("home")}
          >
            {language === "EN" ? "Home" : "Home"}
          </Link>
          <Link
            to="about-me"
            spy={true}
            smooth={true}
            duration={500}
            className={activeSection === "about-me" ? "active" : ""}
            onSetActive={() => handleSetActive("about-me")}
          >
            {language === "EN" ? "About Me" : "Su di me"}
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            className={activeSection === "projects" ? "active" : ""}
            onSetActive={() => handleSetActive("projects")}
          >
            {language === "EN" ? "Projects" : "Progetti"}
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className={activeSection === "contact" ? "active" : ""}
            onSetActive={() => handleSetActive("contact")}
          >
            {language === "EN" ? "Contact" : "Contatti"}
          </Link>
        </nav>

        <div className="header-btns">
          <button onClick={toggleLanguage} className="language-toggle">
            {language === "EN" ? "IT" : "EN"}
          </button>
        </div>
      </header>

      {isModalOpen && (
        <div className={`modal ${isModalOpen ? "open" : ""}`}>
          <div className="modal-content">
            <button className="close" onClick={toggleModal}>
              &times;
            </button>
            <nav className="mobile-nav">
              <Link
                to="home"
                smooth={true}
                duration={500}
                onClick={toggleModal}
                className={activeSection === "home" ? "active" : ""}
              >
                {language === "EN" ? "HOME" : "HOME"}
              </Link>
              <Link
                to="about-me"
                smooth={true}
                duration={500}
                onClick={toggleModal}
                className={activeSection === "about-me" ? "active" : ""}
              >
                {language === "EN" ? "ABOUT ME" : "ABOUT ME"}
              </Link>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                onClick={toggleModal}
                className={activeSection === "projects" ? "active" : ""}
              >
                {language === "EN" ? "PROJECTS" : "PROGETTI"}
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                onClick={toggleModal}
                className={activeSection === "contact" ? "active" : ""}
              >
                {language === "EN" ? "CONTACT" : "CONTATTI"}
              </Link>
              <button onClick={toggleLanguage} className="language-toggle">
                {language === "EN" ? "ITALIAN" : "ENGLISH"}
              </button>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
