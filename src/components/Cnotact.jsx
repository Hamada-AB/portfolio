import { Element } from "react-scroll";
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
            <p>
              {language === "EN"
                ? "I'd love to hear from you! Whether you have questions or feedback, feel free to reach out. Use the contact form to send a message directly. Fill in your details - email and message are required. Your message will be sent securely. Alternatively, connect with me on LinkedIn or other social platforms linked below. Looking forward to hearing from you!"
                : "Mi piacerebbe sentire da te! Che tu abbia domande o feedback, non esitare a contattarmi. Usa il modulo di contatto per inviare un messaggio direttamente. Inserisci i tuoi dati - email e messaggio sono obbligatori. Il tuo messaggio sarà inviato in modo sicuro. In alternativa, puoi connetterti con me su LinkedIn o su altre piattaforme social linkate qui sotto. Non vedo l'ora di sentirti!"}
            </p>

            <div className="platforms">
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>3</div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </Element>
  );
}
