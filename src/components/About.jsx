import { useEffect, useRef, useState } from "react";
import { Element } from "react-scroll";
import portfolioImg from "../assets/image/my-photo.jpg";

// Components
import TechCarousel from "./TechCarousel";

export default function About({ language }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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
              <p>
                Hello there! My name is Hamada Abdelaal. I&#39;m a junior
                full-stack developer based in Italy. I recently completed a
                six-month coding bootcamp at{" "}
                <a href="https://boolean.co.uk/" target="_blank">
                  {" "}
                  Boolean&nbsp;UK
                </a>
                , where I honed my skills in a variety of technologies. My tech
                stack includes HTML, CSS, JavaScript, React, Node.js,
                Express.js, Prisma, and PostgreSQL. I&#39;m passionate about
                creating efficient and user-friendly web applications and eager
                to apply my skills in real-world projects.
              </p>
            ) : (
              <p>
                Ciao! Mi chiamo Hamada Abdelaal. Sono uno sviluppatore
                full-stack junior con sede in Italia. Ho recentemente completato
                un bootcamp di programmazione di sei mesi presso{" "}
                <a href="https://boolean.co.uk/" target="_blank">
                  {" "}
                  Boolean&nbsp;UK
                </a>
                , dove ho affinato le mie competenze in una varietà di
                tecnologie. Il mio stack tecnologico include HTML, CSS,
                JavaScript, React, Node.js, Express.js, Prisma e PostgreSQL.
                Sono appassionato di creare applicazioni web efficienti e
                user-friendly e sono desideroso di applicare le mie competenze
                in progetti del mondo reale.
              </p>
            )}

            {language === "EN" ? (
              <p>
                My professional journey has been diverse. I spent a decade in
                accounting, which refined my patience and precision-skills
                essential for identifying calculation errors. After that, I
                explored various other fields before transitioning into
                technology. This varied experience has broadened my perspective
                and honed my problem-solving abilities. These diverse
                competencies have proven to be invaluable assets in my new
                career as a developer.
              </p>
            ) : (
              <p>
                Il mio percorso professionale è stato variegato. Ho trascorso un
                decennio nel settore contabile, che ha affinato la mia pazienza
                e precisione—competenze essenziali per identificare errori di
                calcolo. Successivamente, ho esplorato vari altri campi prima di
                passare alla tecnologia. Questa esperienza diversificata ha
                ampliato la mia prospettiva e affinato le mie capacità di
                problem-solving. Queste competenze diverse si sono rivelate
                risorse inestimabili nella mia nuova carriera come sviluppatore.
              </p>
            )}
          </div>
        </div>

        <TechCarousel />
      </section>
    </Element>
  );
}
