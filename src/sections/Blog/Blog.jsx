import SectionHeading from "../../components/layout/SectionHeading/SectionHeading";
import BlogCard from "../../components/cards/BlogCards/Card/BlogCard";
import { Button } from "../../components/Buttons/Buttons";

import { useRef } from "react";
import { SlideInUp } from "../../transitions/Slide";

// GSAP
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function Blog() {
  const blogContainerRef = useRef();
  const blogTimelineRef = useRef();

  const commonImgStyle = {
    width: "100%",
    height: "220px", // Fixed height for all images
    objectFit: "cover", // Ensures image covers the area
    aspectRatio: "16 / 9", // Consistent aspect ratio
    borderRadius: "1rem", // Optional: rounded corners for consistency
    display: "block",
  };

  useGSAP(
    () => {
      blogTimelineRef.current = gsap.timeline({
        scrollTrigger: {
          trigger: blogContainerRef.current,
          start: "top 50%",
          toggleActions: "play none none none",
        },
      });
      blogTimelineRef.current.pause();

      blogTimelineRef.current.add(
        SlideInUp(blogContainerRef.current.querySelectorAll(".slide-in-up")),
      );

      return () => {
        blogTimelineRef.current.kill();
      };
    },
    {
      scope: blogContainerRef,
      dependencies: [],
      revertOnUpdate: false,
    },
  );

  return (
    <section id="blog" className="section" ref={blogContainerRef}>
      <div className="container mx-auto flex max-w-[var(--container-width)] flex-col gap-12">
        <div className="slide-in-up">
          <SectionHeading
            label="Blog"
            title="Articles & Insights I've Shared"
            title_text="Here are some of my latest articles and insights on web development, programming, and technology."
            direction="row"
            text_m_width=""
            title_m_width="max-w-70"
          />
        </div>

        <div className="flex flex-col gap-10">
          {/* New Featured Blog Posts */}
          <div className="slide-in-up flex flex-col gap-8 md:flex-row md:gap-4 lg:gap-5">
            <BlogCard
              title="Fine-Tuning Made Fast: A Quick Guide to Unsloth"
              desc="Learn how to fine-tune large language models efficiently using Unsloth, a powerful optimization library that speeds up training."
              readLink="https://sirinejnayeh.hashnode.dev/fine-tuning-made-fast-a-quick-guide-to-unsloth"
              imgSrc="/thumbnails/mini/blog0.jpeg"
              publishDate="Jan 15, 2025"
              readTime="6 min read"
              imgStyle={commonImgStyle}
            />
            <BlogCard
              title="Join the Open Source Revolution: A Beginner's Guide to Open Source Contribution"
              desc="A comprehensive beginner's guide to getting started with open source contributions, from finding projects to making your first PR."
              readLink="https://sirinejnayeh.hashnode.dev/join-the-open-source-revolution-a-beginners-guide-to-open-source-contribution"
              imgSrc="/thumbnails/mini/blog5.png"
              publishDate="Jan 10, 2025"
              readTime="8 min read"
              imgStyle={commonImgStyle}
            />
          </div>

          <div className="slide-in-up flex flex-col gap-8 md:flex-row md:gap-4 lg:gap-5">
            <BlogCard
              title="Building Multi-Agent LLM Systems for Document Processing in the Enterprise"
              desc="Explore how to architect and deploy multi-agent LLM systems for scalable document processing."
              readLink="https://sirinejnayeh.hashnode.dev/building-multi-agent-llm-systems-for-document-processing-in-the-enterprise "
              imgSrc="/thumbnails/mini/blog1.jpg"
              publishDate="Jun 9, 2025"
              readTime="10 min read"
              imgStyle={commonImgStyle}
            />
            <BlogCard
              title="Understanding Huffman Coding: A Practical Approach"
              desc="A hands-on guide to Huffman Coding, its algorithm, and real-world applications for efficient data compression."
              readLink="https://sirinejnayeh.hashnode.dev/understanding-huffman-coding-a-practical-approach#clzbj27sw0lkjccnvanf37l43"
              imgSrc="/thumbnails/mini/blog2.jpg"
              publishDate="Aug 1, 2024"
              readTime="7 min read"
              imgStyle={commonImgStyle}
            />
          </div>

          <div className="slide-in-up flex flex-col gap-8 md:flex-row md:gap-4 lg:gap-5">
            <BlogCard
              title="Binary Lifting: Applying DP on Binary Trees"
              desc="A beginner-friendly walkthrough of binary lifting and dynamic programming on binary trees."
              readLink=" https://sirinejnayeh.hashnode.dev/binary-lifting-my-first-time-applying-dp-on-binary-trees "
              imgSrc="/thumbnails/mini/blog3.jpg"
              publishDate="Jul 26, 2024"
              readTime="8 min read"
              imgStyle={commonImgStyle}
            />
            <BlogCard
              title="Deploy EKS cluster with Jenkins"
              desc="Step-by-step guide to deploying an AWS EKS cluster using Jenkins automation, including best practices"
              readLink="https://sirinejnayeh.hashnode.dev/deploy-eks-cluster-with-jenkins "
              imgSrc="/thumbnails/mini/blog4.png"
              publishDate="Jul 14, 2023"
              readTime="9 min read"
              imgStyle={commonImgStyle}
            />
          </div>

          {/* See More Button */}
          <div className="slide-in-up flex justify-center">
            <Button
              href="https://sirinejnayeh.hashnode.dev/"
              type="primary"
              newtab="true"
            >
              See more
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
