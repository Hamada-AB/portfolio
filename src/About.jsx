import { Element } from "react-scroll";

export default function About({ language }) {
  return (
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
  );
}
