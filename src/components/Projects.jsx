import { useState } from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import { Element } from "react-scroll";

// Projects Data
import { projects } from "../assets/content/projects";
import { intro } from "../assets/content/projects";

// Components
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function Projects({ language }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Details Modal's Control
  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = "unset";
  };

  // Animation for .intro Div
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const headerAnimation = useSpring({
    transform: headerInView ? "scale(1)" : "scale(0.5)",
    opacity: headerInView ? 1 : 0,
    config: { mass: 1, tension: 120, friction: 70 },
  });

  return (
    <Element name="projects">
      <section className="projects-section">
        <animated.div
          ref={headerRef}
          style={headerAnimation}
          className={"intro"}
        >
          <div className="intro-header">
            <h2>{language === "EN" ? "PROJECTS" : "PROGETTI"}</h2>
            <p>
              {language === "EN" ? "I love what I do" : "Amo quello che faccio"}
            </p>
          </div>

          <p className="intro-message">
            {language === "EN" ? intro.en : intro.it}
          </p>
        </animated.div>

        <div className="projects">
          {projects.map((project, index) => (
            <ProjectCard
              index={index}
              key={project.id}
              project={project}
              onDetailsClick={openModal}
            />
          ))}
        </div>

        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={closeModal}
          language={language}
        />
      </section>
    </Element>
  );
}
