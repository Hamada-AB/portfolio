import { Link } from "react-scroll";

export default function Navbar({ language, activeSection, handleSetActive }) {
  return (
    <nav className="desktop-nav">
      <Link
        to="home"
        spy={true}
        smooth={true}
        duration={500}
        className={activeSection === "home" ? "active" : ""}
        onSetActive={() => handleSetActive("home")}
      >
        {language === "EN" ? "HOME" : "HOME"}
      </Link>
      <Link
        to="about-me"
        spy={true}
        smooth={true}
        duration={500}
        className={activeSection === "about-me" ? "active" : ""}
        onSetActive={() => handleSetActive("about-me")}
      >
        {language === "EN" ? "ABOUT ME" : "ABOUT ME"}
      </Link>
      <Link
        to="projects"
        spy={true}
        smooth={true}
        duration={500}
        className={activeSection === "projects" ? "active" : ""}
        onSetActive={() => handleSetActive("projects")}
      >
        {language === "EN" ? "PROJECTS" : "PROGETTI"}
      </Link>
      <Link
        to="contact"
        spy={true}
        smooth={true}
        duration={500}
        className={activeSection === "contact" ? "active" : ""}
        onSetActive={() => handleSetActive("contact")}
      >
        {language === "EN" ? "CONTACT" : "CONTATTI"}
      </Link>
    </nav>
  );
}
