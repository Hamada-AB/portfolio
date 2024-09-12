import { useState, useEffect } from "react";
import Modal from "react-modal";
import { Link, Element } from "react-scroll";
import parse from "html-react-parser";
import { btnIcons } from "../assets/icon/projectCard";

// Components
import ScreenShots from "./ScreenShots";

const ProjectModal = ({ project, isOpen, onClose, language }) => {
  const [activeContent, setActiveContent] = useState("null");
  const [winWidth, setWinWidth] = useState(0);
  const details = language === "EN" ? project?.detailsEN : project?.detailsIT;

  const liveBtnText = winWidth > 500 ? "Live Demo" : "Live";
  const serverBtnText = winWidth > 500 ? "Server Repo" : "Server";
  const clientBtnText = winWidth > 500 ? "Client Repo" : "Client";

  function getWinWidth() {
    setWinWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", getWinWidth);
    return () => {
      window.removeEventListener("resize", getWinWidth);
    };
  }, []);

  function handleActiveContent(to) {
    setActiveContent(to);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Project Details"
      className="project-modal-content"
      overlayClassName="project-modal-overlay"
    >
      <div className="modal-header">
        <button
          className="modal-close-button"
          onClick={() => {
            onClose();
            setActiveContent("null");
          }}
        >
          &times;
        </button>
      </div>
      <div className="modal-btns-container">
        <button
          className="modal-btn"
          onClick={() => window.open(project?.liveDemo, "_blank")}
        >
          {liveBtnText}
          {parse(btnIcons.live)}
        </button>
        <button
          className="modal-btn"
          onClick={() => window.open(project?.serverRepo, "_blank")}
        >
          {serverBtnText}
          {parse(btnIcons.github)}
        </button>
        <button
          className="modal-btn"
          onClick={() => window.open(project?.clientRepo, "_blank")}
        >
          {clientBtnText}
          {parse(btnIcons.github)}
        </button>
      </div>

      <ScreenShots project={project} />

      <div id="modal-body">
        <div className="toc-titles">
          <ul>
            <li>
              <Link
                to="overview"
                containerId="modal-body"
                smooth={true}
                duration={500}
                onClick={() => handleActiveContent("overview")}
                className={activeContent === "overview" ? "focus" : ""}
              >
                {language === "EN" ? "Overview" : "Panoramica"}
              </Link>
            </li>
            <li>
              <Link
                to="technologies"
                containerId="modal-body"
                smooth={true}
                duration={500}
                onClick={() => handleActiveContent("technologies")}
                className={activeContent === "technologies" ? "focus" : ""}
              >
                {language === "EN"
                  ? "Technologies Used"
                  : "Tecnologie Utilizzate"}
              </Link>
            </li>
            <li>
              <Link
                to="features"
                containerId="modal-body"
                smooth={true}
                duration={500}
                onClick={() => handleActiveContent("features")}
                className={activeContent === "features" ? "focus" : ""}
              >
                {language === "EN" ? "Features" : "Caratteristiche"}
              </Link>
            </li>
            <li>
              <Link
                to="highlights"
                containerId="modal-body"
                smooth={true}
                duration={500}
                onClick={() => handleActiveContent("highlights")}
                className={activeContent === "highlights" ? "focus" : ""}
              >
                {language === "EN" ? "Highlights" : "Punti Salienti"}
              </Link>
            </li>
            <li>
              <Link
                to="status"
                containerId="modal-body"
                smooth={true}
                duration={500}
                onClick={() => handleActiveContent("status")}
                className={activeContent === "status" ? "focus" : ""}
              >
                {language === "EN" ? "Current Status" : "Stato Attuale"}
              </Link>
            </li>
            <li>
              <Link
                to="challenges"
                containerId="modal-body"
                smooth={true}
                duration={500}
                onClick={() => handleActiveContent("challenges")}
                className={activeContent === "challenges" ? "focus" : ""}
              >
                {language === "EN"
                  ? "Challenges and Learnings"
                  : "Sfide e Apprendimenti"}
              </Link>
            </li>
          </ul>
        </div>

        {/* Content Sections */}
        <div className="toc-content">
          <Element name="overview">
            <h3>{language === "EN" ? "Overview" : "Panoramica"}</h3>
            <p dangerouslySetInnerHTML={{ __html: details?.overview }} />
          </Element>

          <Element name="technologies">
            <h3>
              {" "}
              {language === "EN"
                ? "Technologies Used"
                : "Tecnologie Utilizzate"}
            </h3>
            <ul>
              {details?.technologies.map((item, index) => {
                return (
                  <li key={index}>
                    <span>{item.side}: </span>
                    {item.techs}
                  </li>
                );
              })}
            </ul>
          </Element>

          <Element name="features">
            <h3>{language === "EN" ? "Features" : "Caratteristiche"}</h3>
            <ul>
              {details?.features.map((item, index) => {
                return (
                  <li key={index}>
                    <span>{item.feat}: </span>
                    {item.desc}
                  </li>
                );
              })}
            </ul>
          </Element>

          <Element name="highlights">
            <h3>{language === "EN" ? "Highlights" : "Punti Salienti"}</h3>
            <ul>
              {details?.highlights.map((item, index) => {
                return (
                  <li key={index}>
                    <span>{item.light}: </span>
                    {item.desc}
                  </li>
                );
              })}
            </ul>
          </Element>

          <Element name="status">
            <h3>{language === "EN" ? "Current Status" : "Stato Attuale"}</h3>
            <p>{details?.status}</p>
          </Element>

          <Element name="challenges">
            <h3>
              {language === "EN"
                ? "Challenges and Learnings"
                : "Sfide e Apprendimenti"}
            </h3>
            <ul>
              {details?.challenges.map((item, index) => {
                return (
                  <li key={index}>
                    <span>{item.side}: </span>
                    {item.desc}
                  </li>
                );
              })}
            </ul>
          </Element>
        </div>
      </div>
    </Modal>
  );
};

export default ProjectModal;
