import { Element } from "react-scroll";

export default function Projects({ language, projects }) {
  return (
    <Element name="projects">
      <section className="projects-section">
        <div className="project-header">
          <h2>{language === "EN" ? "PROJECTS" : "PROGETTI"}</h2>
          <p>
            {language === "EN" ? "I love what I do" : "Amo quello che faccio"}
          </p>
        </div>
      </section>
    </Element>
  );
}
