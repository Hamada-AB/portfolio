import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const ProjectCard = ({ project, onDetailsClick, index }) => {
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
          <button
            className="btn live-demo"
            onClick={() => window.open(project.liveDemo, "_blank")}
          >
            Live Demo
          </button>
          <button
            className="btn details"
            onClick={() => onDetailsClick(project)}
          >
            Details
          </button>
        </div>
      </div>
    </animated.div>
  );
};

export default ProjectCard;
