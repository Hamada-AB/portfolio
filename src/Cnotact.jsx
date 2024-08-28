import { Element } from "react-scroll";

export default function Contact({ language }) {
  return (
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
  );
}
