export default function ProjectCard({ project, onDetailsClick }) {
  return (
    <div
      className="project-card"
      style={{ backgroundImage: `url(${project?.image})` }}
    >
      <div className="overlay">
        <button
          className="btn live-demo"
          onClick={() => window.open(project.liveDemo, "_blank")}
        >
          Live Demo
        </button>
        <button className="btn details" onClick={() => onDetailsClick(project)}>
          Details
        </button>
      </div>
    </div>
  );
}
