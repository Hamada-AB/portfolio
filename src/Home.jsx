import { useState, useEffect } from "react";
import { Link, Element } from "react-scroll";
import { useSpring, animated } from "react-spring";

import { ps } from "./assets/content/home";

export default function Home({ language }) {
  const [currentParagraph, setCurrentParagraph] = useState(0);

  const paragraphs = [
    language === "EN" ? ps.one.en : ps.one.it,
    language === "EN" ? ps.two.en : ps.two.it,
    language === "EN" ? ps.three.en : ps.three.it,
    language === "EN" ? ps.four.en : ps.four.it,
    language === "EN" ? ps.five.en : ps.five.it,
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
