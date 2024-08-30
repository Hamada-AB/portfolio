import { Link } from "react-scroll";

export default function MenuModal({
  isModalOpen,
  toggleModal,
  activeSection,
  language,
  toggleLanguage,
}) {
  return (
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
  );
}
