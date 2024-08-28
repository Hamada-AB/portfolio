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
  );
}
