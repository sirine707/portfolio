import { useEffect } from "react";

function CertificateModal({ isOpen, onClose, title, imgSrc }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative z-10 max-h-[90vh] max-w-[90vw] overflow-hidden rounded-lg bg-white shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-black/20 text-white transition-colors hover:bg-black/40"
          aria-label="Close modal"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Certificate Image */}
        <div className="flex flex-col">
          {/* Title */}
          <div className="bg-gray-50 px-6 py-4">
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          </div>
          
          {/* Image */}
          <div className="flex items-center justify-center p-4">
            <img
              src={imgSrc}
              alt={title}
              className="max-h-[70vh] max-w-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CertificateModal;
