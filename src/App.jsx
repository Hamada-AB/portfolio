import "./index.css";
import { useState } from "react";
import { Link } from "react-scroll";

export default function App() {
  const [language, setLanguage] = useState("EN");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "EN" ? "IT" : "EN"));
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <header>
        <div className="logo">HA</div>
        <div className="menu-icon" onClick={toggleModal}>
          &#9776; {/* This is the menu icon */}
        </div>
        <nav className="desktop-nav">
          <Link to="home" smooth={true} duration={500}>
            {language === "EN" ? "Home" : "Home"}
          </Link>
          <Link to="about-me" smooth={true} duration={500}>
            {language === "EN" ? "About Me" : "Su di me"}
          </Link>
          <Link to="projects" smooth={true} duration={500}>
            {language === "EN" ? "Projects" : "Progetti"}
          </Link>
          <Link to="contact" smooth={true} duration={500}>
            {language === "EN" ? "Contact" : "Contatti"}
          </Link>
          <button onClick={toggleLanguage} className="language-toggle">
            {language === "EN" ? "IT" : "EN"}
          </button>
          <button className="contact-button">
            {language === "EN" ? "Contact Me" : "Contattami"}
          </button>
        </nav>
      </header>

      {/* Modal for Mobile Navigation */}
      {isModalOpen && (
        <div className={`modal ${isModalOpen ? "open" : ""}`}>
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>
              &times; {/* Close icon */}
            </span>
            <nav className="mobile-nav">
              <Link
                to="home"
                smooth={true}
                duration={500}
                onClick={toggleModal}
              >
                {language === "EN" ? "Home" : "Home"}
              </Link>
              <Link
                to="about-me"
                smooth={true}
                duration={500}
                onClick={toggleModal}
              >
                {language === "EN" ? "About Me" : "Su di me"}
              </Link>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                onClick={toggleModal}
              >
                {language === "EN" ? "Projects" : "Progetti"}
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                onClick={toggleModal}
              >
                {language === "EN" ? "Contact" : "Contatti"}
              </Link>
              <button onClick={toggleLanguage} className="language-toggle">
                {language === "EN" ? "IT" : "EN"}
              </button>
              <button className="contact-button">
                {language === "EN" ? "Contact Me" : "Contattami"}
              </button>
            </nav>
          </div>
        </div>
      )}

      <main>
        <section id="home" className="home-section">
          <div className="home-content">
            <h1>
              {language === "EN" ? "Hi! I am Hamada" : "Ciao! Sono Hamada"}
            </h1>
            <p>
              {language === "EN"
                ? "I am a full-stack web developer"
                : "Sono uno sviluppatore web full stack"}
            </p>
          </div>
        </section>

        <section id="about-me">
          <h2>{language === "EN" ? "About Me" : "Su di me"}</h2>
          <p>
            {language === "EN"
              ? "This is the About Me section."
              : "Questa è la sezione Su di me."}
          </p>
        </section>

        <section id="projects">
          <h2>{language === "EN" ? "Projects" : "Progetti"}</h2>
          <p>
            {language === "EN"
              ? "This is the Projects section."
              : "Questa è la sezione Progetti."}
          </p>
        </section>

        <section id="contact">
          <h2>{language === "EN" ? "Contact" : "Contatti"}</h2>
          <p>
            {language === "EN"
              ? "This is the Contact section."
              : "Questa è la sezione Contatti."}
          </p>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Hamada Abdelaal</p>
      </footer>
    </div>
  );
}
