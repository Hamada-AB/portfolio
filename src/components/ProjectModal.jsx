import Modal from "react-modal";

const ProjectModal = ({ project, isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Project Details"
      className="project-modal-content"
      overlayClassName="project-modal-overlay"
    >
      <div className="modal-header">
        <h2>{project?.title}</h2>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
      </div>
      <div className="modal-body">
        <p>{project?.details}</p>
        <button
          className="btn live-demo"
          onClick={() => window.open(project.liveDemo, "_blank")}
        >
          Live Demo
        </button>
      </div>
    </Modal>
  );
};

export default ProjectModal;
