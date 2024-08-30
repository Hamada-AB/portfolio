import { useEffect, useRef, useState } from "react";
import { Element } from "react-scroll";

import portfolioImg from "../assets/image/my-photo.jpg";
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
          <p>{language === "EN" ? "ABOUT ME" : "ABOUT ME"}</p>
          <h2>{language === "EN" ? "HELLO THERE!" : "CIAO!"}</h2>
        </div>
        <div className="content-container">
          <div className="my-photo-container">
            <img className="my-photo" src={portfolioImg} alt="a person photo" />
          </div>

          <div className="bio">
            {language === "EN" ? (
              <p>
                My name is Hamada Abdelaal. I&#39;m a junior full-stack
                developer based in Italy. I&#39;m passionate about creating
                useful and aesthetically pleasing applications for our
                ever-evolving tech world. I recently completed a six-month
                coding bootcamp at
                <a href="https://boolean.co.uk/" target="_blank">
                  {" "}
                  Boolean&nbsp;UK
                </a>
                . I&#39;m constantly striving to improve my skills, using my
                problem-solving abilities to devise clever solutions and
                embracing daily learning opportunities.
              </p>
            ) : (
              <p>
                Mi chiamo Hamada Abdelaal. Sono uno sviluppatore full-stack
                junior con sede in Italia. Sono appassionato di creare
                applicazioni utili ed esteticamente gradevoli per il nostro
                mondo tecnologico in continua evoluzione. Ho recentemente
                completato un bootcamp di programmazione di sei mesi presso
                <a href="https://boolean.co.uk/" target="_blank">
                  {" "}
                  Boolean&nbsp;UK
                </a>
                . Mi impegno costantemente per migliorare le mie competenze,
                utilizzando le mie capacità di problem-solving per escogitare
                soluzioni intelligenti e abbracciando opportunità di
                apprendimento quotidiane.
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
      </section>
    </Element>
  );
}
