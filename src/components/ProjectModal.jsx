export default function ProjectModal({ project, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <h2>{project?.title}</h2>
        <p>{project?.details}</p>
      </div>
    </div>
  );
}
