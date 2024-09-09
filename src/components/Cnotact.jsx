import { Element } from "react-scroll";
import { formIcon } from "../assets/icon/contact";
import parse from "html-react-parser";

// Components
import ContactForm from "./ContactForm";

export default function Contact({ language }) {
  return (
    <Element name="contact">
      <section className="contact">
        <div className="welcome">
          <h2>{language === "EN" ? "CONTACT" : "CONTATTI"}</h2>
          <p>
            {language === "EN"
              ? "Delighted to hear from you"
              : "Felice di sentirti"}
          </p>
        </div>
        <div className="contact-body">
          <div className="contact-intro">
            <div>
              <h4>{language === "EN" ? "Get in Touch" : "Contattami"} </h4>
              <p>
                {language === "EN"
                  ? "I'd love to hear from you! Whether you have questions, or feedbackor just want to say hello, feel free to reach out. Looking forward to hearing from you!"
                  : "Sarei felice di sentirti! Che tu abbia domande, feedback o semplicemente voglia dire ciao, non esitare a contattarmi. Non vedo l'ora di sentirti!"}
              </p>
            </div>

            <div>
              <h4>Email</h4>
              {language === "EN" ? (
                <p>
                  Prefer to send an email? Drop me a message directly at{" "}
                  <a href="mailto:hamada_abdelaal@hotmail.com">
                    hamada_abdelaal@hotmail.com
                  </a>
                  , and I’ll get back to you as soon as possible.
                </p>
              ) : (
                <p>
                  Preferisci inviare un'email? Mandami un messaggio direttamente
                  a{" "}
                  <a href="mailto:hamada_abdelaal@hotmail.com">
                    hamada_abdelaal@hotmail.com
                  </a>{" "}
                  e ti risponderò il prima possibile.
                </p>
              )}
            </div>

            <div>
              <h4>{language === "EN" ? "Location" : "Posizione"}</h4>
              <p>
                {language === "EN"
                  ? "Terno d'Isola, Italy"
                  : "Terno d'Isola, Italia"}
              </p>
            </div>

            <ul className="platforms">
              <li>
                <a
                  href="https://www.linkedin.com/in/hamada-abdelaal"
                  target="_blank"
                >
                  {parse(formIcon.linkedIn)}
                </a>
              </li>

              <li>
                <a href="https://github.com/Hamada-AB" target="_blank">
                  {parse(formIcon.gitHub)}
                </a>
              </li>
            </ul>
          </div>

          <ContactForm />
        </div>
      </section>
    </Element>
  );
}
