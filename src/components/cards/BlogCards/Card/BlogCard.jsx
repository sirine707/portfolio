import LinkIcon from "../../../../assets/svg/link";
import HoverBtnWrapper from "../../../buttons/HoverBtnWrapper";
import "./BlogCard.css";

function BlogCard({
  title = "Sample Blog Article Title",
  desc = "Sample description for the blog article content.",
  readLink = "https://hashnode.com/@sirinejnayeh",
  imgSrc = "/Project-Card-Image.png",
  publishDate = "Jan 1, 2025",
  readTime = "5 min read",
  className = "",
}) {
  return (
    <div className={`blog-card flex flex-col gap-4.5 ${className}`}>
      <a href={readLink} target="_blank" className="overflow-hidden rounded-lg">
        <img
          className="blog-card-img aspect-video w-full overflow-hidden object-cover object-center"
          src={imgSrc}
          alt="Blog Article Image"
        />
      </a>

      <div className="px-2">
        <div className="flex items-start justify-between gap-5 md:gap-2 lg:gap-5">
          <a href={readLink} target="_blank" className="w-full">
            <h4 className="fill-[var(--primary-dark-blue)] text-lg leading-tight font-medium tracking-tight">
              {title}
            </h4>
            <p className="mt-1 text-base tracking-tight text-[var(--primary-dark-blue)]/75 lg:mt-2">
              {desc}
            </p>
            <div className="mt-3 flex gap-3 text-sm text-[var(--primary-dark-blue)]/60">
              <span>{publishDate}</span>
              <span>•</span>
              <span>{readTime}</span>
            </div>
          </a>

          <BlogCardLinks readLink={readLink} />
        </div>
      </div>
    </div>
  );
}

export default BlogCard;

function BlogCardLinks({ readLink }) {
  return (
    <div className="flex gap-1 lg:flex">
      <HoverBtnWrapper px={0.25} py={0.25}>
        <a href={readLink} target="_blank">
          <LinkIcon className="h-6 w-6 fill-[var(--primary-dark-blue)] lg:h-7 lg:w-7" />
        </a>
      </HoverBtnWrapper>
    </div>
  );
}
