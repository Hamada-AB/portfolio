import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import parse from "html-react-parser";

import { btnIcons } from "../assets/icon/projectCard";

const ProjectCard = ({ project, onDetailsClick, index, language }) => {
  // For Project Card Animation
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const animationProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "scale(1)" : "scale(0.5)",
    config: { mass: 1, tension: 120, friction: 70 },
  });

  return (
    <animated.div ref={ref} style={animationProps}>
      <div
        className="project-card"
        style={{ backgroundImage: `url("${project.image}")` }}
      >
        <div className="overlay">
          <h3>Samsung Food Replica</h3>
          <div className="overlay-btns">
            <button
              className="btn liveDemo"
              onClick={() => window.open(project.liveDemo, "_blank")}
            >
              Live Demo {parse(btnIcons.live)}
            </button>
            <button
              className="btn details"
              onClick={() => onDetailsClick(project)}
            >
              {language === "EN" ? "Details" : "Dettagli"}
              {parse(btnIcons.info)}
            </button>
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export default ProjectCard;
