import { useState, useEffect } from "react";
import { Link, Element } from "react-scroll";
import { useSpring, animated } from "react-spring";

export default function Home({ language }) {
  const [currentParagraph, setCurrentParagraph] = useState(0);

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

  return (
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
            <animated.p style={{ ...paragraphSpring, position: "absolute" }}>
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
  );
}
