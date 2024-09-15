import { useEffect, useRef, useState } from "react";
import { Element } from "react-scroll";
import portfolioImg from "../assets/image/my-photo.jpg";
import { bio } from "../assets/content/about";
// Components
import TechCarousel from "./TechCarousel";

export default function About({ language, winWidth }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showFullText, setShowFullText] = useState(winWidth > 1000);

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.classList.add("loaded");
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, 100);
          observer.unobserve(sectionRef.current);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const toggleText = () => {
    setShowFullText((prev) => !prev);
  };

  return (
    <Element name="about-me">
      <section
        ref={sectionRef}
        className={`about-me ${isVisible ? "visible" : ""}`}
      >
        <div className="welcome">
          <h2>{language === "EN" ? "ABOUT ME" : "ABOUT ME"}</h2>
          <p>
            {language === "EN"
              ? "Versatile. Innovative. Ambitious."
              : "Versatile. Innovativo. Ambizioso."}
          </p>
        </div>

        <div className="content-container">
          <div className="my-photo-container">
            <img className="my-photo" src={portfolioImg} alt="a person photo" />
          </div>

          <div className="bio">
            {language === "EN" ? (
              <p dangerouslySetInnerHTML={{ __html: bio.p1.en }} />
            ) : (
              <p dangerouslySetInnerHTML={{ __html: bio.p1.it }} />
            )}
            {language === "EN"
              ? showFullText && <p>{bio.p2.en}</p>
              : showFullText && <p>{bio.p2.it}</p>}
            <button onClick={toggleText}>
              {showFullText
                ? language === "EN"
                  ? "Show Less"
                  : "Mostra Meno"
                : language === "EN"
                ? "Show More"
                : "Mostra di Più"}
            </button>
          </div>
        </div>

        <TechCarousel />
      </section>
    </Element>
  );
}
