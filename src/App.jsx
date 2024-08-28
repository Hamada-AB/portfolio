import "./index.css";
import { useState, useEffect } from "react";
import { Link, Element, Events } from "react-scroll";
import { useSpring, animated } from "react-spring";

export default function App() {
  const [language, setLanguage] = useState("EN");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentParagraph, setCurrentParagraph] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  const paragraphs = [
    language === "EN"
      ? `I'm a junior web developer with a passion for creating
              responsive, user-friendly websites.`
      : `Sono uno sviluppatore web junior con una passione per la creazione di siti web responsivi e facili da usare.`,
    language === "EN"
      ? `I'm dedicated to writing clean, efficient code and continuously learning new technologies.`
      : `Mi dedico a scrivere codice pulito ed efficiente e ad apprendere continuamente nuove tecnologie.`,
    language === "EN"
      ? "I love coding and solving problems."
      : "Amo programmare e risolvere problemi.",
    language === "EN" ? "I am located in Italy." : "Risiedo in Italia.",
    language === "EN"
      ? "Let’s build something amazing together!"
      : "Costruiamo insieme qualcosa di straordinario!",
  ];

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "EN" ? "IT" : "EN"));
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const h1Spring = useSpring({
    from: { opacity: 0, transform: "translateY(-50px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    delay: 700,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentParagraph((prev) => (prev + 1) % paragraphs.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [paragraphs.length]);

  const paragraphSpring = useSpring({
    opacity: 1,
    transform: "translateY(0px)",
    from: { opacity: 0, transform: "translateY(50px)" },
    config: { duration: 1500 },
    reset: true,
  });

  // To detect the active section
  const handleSetActive = (to) => {
    setActiveSection(to);
  };

  useEffect(() => {
    Events.scrollEvent.register("begin", function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function () {
      console.log("end", arguments);
    });

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <div>
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

      <main>
        <Element name="home">
          <section className="home-section">
            <div className="home-content">
              <div className="heading">
                <animated.h1 style={h1Spring}>
                  {language === "EN" ? "Hello, " : "Ciao! "}
                </animated.h1>
                <animated.h1 style={h1Spring}>
                  {language === "EN" ? "I'm Hamada" : "Sono Hamada"}
                </animated.h1>
              </div>

              <div className="p-container">
                <animated.p
                  style={{ ...paragraphSpring, position: "absolute" }}
                >
                  {paragraphs[currentParagraph]}
                </animated.p>
              </div>
            </div>

            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="contact-btn-main"
            >
              {language === "EN" ? "Contact Me" : "Contattami"}
            </Link>
          </section>
        </Element>

        <Element name="about-me">
          <section>
            <h2>{language === "EN" ? "About Me" : "About Me"}</h2>
            <p>
              {language === "EN"
                ? "This is the About Me section."
                : "Questa è la sezione Su di me."}
            </p>
          </section>
        </Element>

        <Element name="projects">
          <section>
            <h2>{language === "EN" ? "Projects" : "Progetti"}</h2>
            <p>
              {language === "EN"
                ? "This is the Projects section."
                : "Questa è la sezione Progetti."}
            </p>
          </section>
        </Element>

        <Element name="contact">
          <section>
            <h2>{language === "EN" ? "Contact" : "Contatti"}</h2>
            <p>
              {language === "EN"
                ? "This is the Contact section."
                : "Questa è la sezione Contatti."}
            </p>
          </section>
        </Element>
      </main>

      <footer>
        <p>&copy; 2024 Hamada Abdelaal</p>
      </footer>
    </div>
  );
}
