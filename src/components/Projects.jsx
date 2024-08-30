import { Element } from "react-scroll";

export default function Projects({ language }) {
  return (
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
  );
}
