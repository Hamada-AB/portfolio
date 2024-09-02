import { useState } from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import { Element } from "react-scroll";

// Components
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function Projects({ language, projects }) {
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
    config: { mass: 1, tension: 120, friction: 80 },
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
            Thank you for visiting my project portfolio! As a junior full-stack
            developer, I&#39;m passionate about creating seamless, functional
            web applications. This portfolio showcases the skills I&#39;ve honed
            through rigorous training and hands-on experience, particularly in
            front-end and back-end development. Below, you&#39;ll find a project
            that exemplifies my current capabilities - a lighter replica of the
            <a href="https://samsungfood.com//" target="_blank">
              {" "}
              Samsung&nbsp;Food
            </a>{" "}
            website, developed during my bootcamp at{" "}
            <a href="https://boolean.co.uk/" target="_blank">
              {" "}
              Boolean&nbsp;UK
            </a>
            . My journey is ongoing, and this portfolio will continue to expand
            as I tackle new challenges and refine my craft. Please take a look
            and follow along as I progress.
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
        />
      </section>
    </Element>
  );
}
