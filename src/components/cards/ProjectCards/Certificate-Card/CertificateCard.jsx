import "../Mini-Card/MiniProjectCard.css";

function CertificateCard({
  title = "Certificate",
  imgSrc = "/Project-Card-Image.png",
  onClick,
}) {
  return (
    <div className="mini-project-card relative flex h-35 w-full flex-row overflow-hidden rounded-lg">
      <div
        className="h-full w-full cursor-pointer"
        onClick={() => onClick({ title, imgSrc })}
      >
        {/* Certificate Card */}
        <div className="gradient-overlay"></div>
        <img
          src={imgSrc}
          alt={title}
          className="mini-project-card-image h-full w-full object-cover"
        />

        <div className="mini-project-card-title absolute bottom-0 left-0 z-20 mb-3 ml-3 flex gap-2">
          <h4 className="text-base font-medium text-white">{title}</h4>
        </div>
      </div>
    </div>
  );
}

export default CertificateCard;
