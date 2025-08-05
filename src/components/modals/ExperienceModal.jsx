import { Fragment } from "react";

function ExperienceModal({
  isOpen,
  onClose,
  title,
  loc,
  logo,
  description,
  responsibilities,
  achievements,
  technologies,
  from,
  to,
  dot, // Add dot prop to distinguish between education and experience
}) {
  if (!isOpen) return null;

  const startDate = new Date(from);
  const endDate = to === "today" ? new Date() : new Date(to);
  const startDateString = startDate.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
  const endDateString =
    to === "today"
      ? "Present"
      : endDate.toLocaleDateString("en-US", { month: "long", year: "numeric" });

  // Determine if this is education (left side) or experience (right side)
  const isEducation = dot === "left";
  const responsibilitiesLabel = isEducation
    ? "Course Materials"
    : "Key Responsibilities";
  const achievementsLabel = isEducation
    ? "Key Achievements"
    : "Key Achievements";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/25 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative max-h-[90vh] w-full max-w-2xl transform overflow-y-auto rounded-2xl bg-white p-6 shadow-xl transition-all">
        {/* Header */}
        <div className="mb-6 flex items-start gap-4">
          <img
            src={logo}
            alt={loc}
            className="h-16 w-16 flex-shrink-0 rounded-lg object-contain"
          />
          <div className="flex-1">
            <h3 className="text-2xl font-medium text-[var(--primary-dark-blue)]">
              {title}
            </h3>
            <p className="text-lg text-[var(--primary-mid-blue)]">{loc}</p>
            <p className="text-sm text-gray-600">
              {startDateString} - {endDateString}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-2xl leading-none text-gray-400 hover:text-gray-600"
          >
            ×
          </button>
        </div>

        {/* Description */}
        {description && (
          <div className="mb-6">
            <p className="leading-relaxed text-gray-800">{description}</p>
          </div>
        )}

        {/* Responsibilities */}
        {responsibilities && responsibilities.length > 0 && (
          <div className="mb-6">
            <h4 className="mb-3 text-lg font-medium text-[var(--primary-dark-blue)]">
              {responsibilitiesLabel}
            </h4>
            {isEducation ? (
              // For education: display materials as tags side by side
              <div className="flex flex-wrap gap-2">
                {responsibilities.map((item, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-stone-100 px-3 py-1 text-sm text-[var(--primary-dark-blue)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            ) : (
              // For work experience: display as bullet list
              <ul className="list-inside list-disc space-y-2">
                {responsibilities.map((item, index) => (
                  <li key={index} className="leading-relaxed text-gray-700">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}        {/* Achievements */}
        {achievements && achievements.length > 0 && (
          <div className="mb-6">
            <h4 className="mb-3 text-lg font-medium text-[var(--primary-dark-blue)]">
              {achievementsLabel}
            </h4>
            <ul className="list-inside list-disc space-y-2">
              {achievements.map((item, index) => (
                <li key={index} className="leading-relaxed text-gray-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies */}
        {technologies && technologies.length > 0 && !isEducation && (
          <div className="mb-6">
            <h4 className="mb-3 text-lg font-medium text-[var(--primary-dark-blue)]">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full bg-stone-100 px-3 py-1 text-sm text-[var(--primary-dark-blue)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Close Button */}
        <div className="flex justify-end border-t border-gray-200 pt-4">
          <button
            onClick={onClose}
            className="rounded-lg bg-stone-100 px-6 py-2 transition-colors hover:bg-stone-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExperienceModal;
