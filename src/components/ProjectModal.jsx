import Modal from "react-modal";

const ProjectModal = ({ project, isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Project Details"
      className="project-modal-content"
      overlayClassName="modal-overlay"
    >
      <div className="modal-header">
        <h2>{project?.title}</h2>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
      </div>
      <div className="modal-body">
        <p>{project?.details}</p>
      </div>
    </Modal>
  );
};

export default ProjectModal;
