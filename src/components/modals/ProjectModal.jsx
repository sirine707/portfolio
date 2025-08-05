import { useEffect } from "react";
import GithubIcon from "../../assets/svg/github.jsx";
import LinkIcon from "../../assets/svg/link.jsx";
import HoverBtnWrapper from "../buttons/HoverBtnWrapper";
import "./ProjectModal.css";

function ProjectModal({
  isOpen,
  onClose,
  title,
  description,
  fullDescription,
  technologies,
  features,
  ghLink,
  liveLink,
  imgSrc,
  headerImgSrc,
}) {
  // Close modal on Escape key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="project-modal-overlay fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4">
      <div className="project-modal relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-xl bg-white shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-gray-600 shadow-md transition-all hover:bg-white hover:text-gray-800"
        >
          ×
        </button>

        {/* Header Image */}
        <div className="relative h-64 overflow-hidden rounded-t-xl md:h-80">
          <img
            src={headerImgSrc || imgSrc}
            alt={`${title} header`}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Title and Links */}
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="flex-1">
              <h2 className="mb-2 text-2xl font-semibold text-[var(--primary-dark-blue)] md:text-3xl">
                {title}
              </h2>
              <p className="text-base text-[var(--primary-dark-blue)]/75 md:text-lg">
                {description}
              </p>
            </div>

            {/* Action Links */}
            <div className="flex gap-2">
              <HoverBtnWrapper px={0.5} py={0.5}>
                <a
                  href={ghLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-[var(--primary-dark-blue)] transition-colors hover:bg-gray-200"
                >
                  <GithubIcon className="h-5 w-5 fill-current" />
                  Code
                </a>
              </HoverBtnWrapper>

              {liveLink && liveLink !== "#" && (
                <HoverBtnWrapper px={0.5} py={0.5}>
                  <a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg bg-[var(--primary-dark-blue)] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--primary-dark-blue)]/90"
                  >
                    <LinkIcon className="h-5 w-5 fill-current" />
                    Live Demo
                  </a>
                </HoverBtnWrapper>
              )}
            </div>
          </div>

          {/* Project Overview */}
          <div className="mb-6">
            <h3 className="mb-3 text-lg font-semibold text-[var(--primary-dark-blue)]">
              Project Overview
            </h3>
            <p className="leading-relaxed text-[var(--primary-dark-blue)]/80">
              {fullDescription}
            </p>
          </div>

          {/* Technologies Used */}
          {technologies && technologies.length > 0 && (
            <div className="mb-6">
              <h3 className="mb-3 text-lg font-semibold text-[var(--primary-dark-blue)]">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-[var(--primary-blue)]/10 px-3 py-1 text-sm font-medium text-[var(--primary-blue)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Key Features */}
          {features && features.length > 0 && (
            <div>
              <h3 className="mb-3 text-lg font-semibold text-[var(--primary-dark-blue)]">
                Key Features
              </h3>
              <ul className="space-y-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--primary-blue)]"></span>
                    <span className="text-[var(--primary-dark-blue)]/80">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
