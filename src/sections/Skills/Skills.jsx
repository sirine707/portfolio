import "./Skills.css";
import SectionHeading from "../../components/layout/SectionHeading/SectionHeading";

import { useRef } from "react";
import { SlideInUp } from "../../transitions/Slide";
// GSAP
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function Skills() {
  const skillsContainerRef = useRef();
  const skillsTimeline = useRef();

  useGSAP(
    () => {
      skillsTimeline.current = gsap.timeline({
        scrollTrigger: {
          trigger: skillsContainerRef.current,
          // markers: true,
          start: "top 60%",
          toggleActions: "play none none none",
        },
      });

      skillsTimeline.current.add(
        SlideInUp(skillsContainerRef.current.querySelectorAll(".slide-in-up")),
      );

      return () => skillsTimeline.current.kill();
    },
    {
      scope: skillsContainerRef, // Limits selector to children of container
      dependencies: [], // Run once after mount
    },
  );

  return (
    <section id="skills" className="section" ref={skillsContainerRef}>
      <div className="container mx-auto flex max-w-[var(--container-width)] flex-col gap-12">
        <div className="slide-in-up">
          <SectionHeading
            label="Skills"
            title="What I Know"
            title_text="Here are the tools and technologies I've used extensively in my professional work and personal projects."
            direction="col"
            text_m_width="max-w-120"
            title_m_width=""
          />
        </div>

        <div className="slide-in-up flex flex-col gap-8 md:gap-16">
          {/* Core Languages & Frameworks */}
          <div className="grid grid-cols-2 gap-2 md:grid-cols-5 md:gap-3">
            <SkillCard name="tensorflow" title="TensorFlow" />
            <SkillCard name="pytorch" title="PyTorch" />
            {/* Assuming icon exists or needs custom */}
            <SkillCard name="pandas" title="Pandas" />
            <SkillCard
              name="langchain"
              title="LangChain"
              customImgSrc="/logos/skills/langchain.svg" // Path to your downloaded SVG
            />
            <SkillCard
              name="qdrant"
              title="Qdrant"
              customImgSrc="/logos/skills/qdrant.svg" // Path to your downloaded SVG
            />
          </div>

          {/* Libraries, Tools & Cloud */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <SkillCardMini title="Python" name="python" />{" "}
            <SkillCardMini title="Java" name="java" />{" "}
            <SkillCardMini title="Spring Boot" name="spring" />{" "}
            {/* Using Spring icon */}
            <SkillCardMini title="React" name="react" />{" "}
            <SkillCardMini title="TypeScript" name="typescript" />{" "}
            <SkillCardMini name="flask" title="Flask" />
            {/* DevOps & CI/CD */}
            <SkillCardMini name="linux" title="Linux" />
            <SkillCardMini name="docker" title="Docker" />
            <SkillCardMini name="kubernetes" title="Kubernetes" />
            <SkillCardMini name="jenkins" title="Jenkins" />
            <SkillCardMini name="git" title="Git" />
            {/* Cloud - AWS */}
            <SkillCardMini
              name="amazonwebservices"
              title="AWS"
              type="original-wordmark"
            />{" "}
            {/* Databases */}
            <SkillCardMini name="mysql" title="MySQL" />
            <SkillCardMini name="mongodb" title="MongoDB" />
            {/* Testing & Utilities */}
            <SkillCardMini name="junit" title="JUnit" />{" "}
            {/* May need custom or use java icon */}
            <SkillCardMini name="postman" title="Postman" />
            {/* Others */}
            <SkillCardMini
              name="kafka"
              title="Kafka"
              customImgSrc="/logos/skills/kafka.svg" // Path to your downloaded SVG
            />{" "}
            {/* Consider adding Nagios if an icon is available or use custom */}
            {/* <SkillCardMini customImgSrc="/path/to/nagios-icon.svg" title="Nagios" /> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

// --- Component Definitions (Unchanged) ---
function SkillCard({ name = "js", title = "JavaScript", theme = "light" }) {
  return (
    <div className="skill-card flex w-full cursor-pointer flex-col gap-6 rounded-xl bg-white px-3 py-4 text-center hover:scale-95">
      <img
        className="h-16"
        src={`https://go-skill-icons.vercel.app/api/icons?i=${name}&theme=${theme}`}
        alt={title}
      />

      <p className="text-base font-medium tracking-tight text-[var(--primary-dark-blue)]">
        {title}
      </p>
    </div>
  );
}

function SkillCardMini({
  name = "html",
  title = "html",
  type = "original",
  customImgSrc,
}) {
  // Prioritize customImgSrc, then Devicon, then fallback (you might want a default icon)
  let imgSrc = customImgSrc;
  if (!imgSrc && name) {
    // Handle potential icon path issues or use alternative sources
    imgSrc = `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-${type}.svg`;
  }

  return (
    <div className="skill-card-mini relative flex cursor-pointer rounded-lg border-1 border-stone-100 bg-white p-3 transition-all duration-200 ease-in-out">
      {imgSrc ? (
        <img className="h-11" src={imgSrc} alt={title} />
      ) : (
        <div className="flex h-11 items-center justify-center text-xs text-gray-500">
          Icon N/A
        </div> // Fallback if no icon source
      )}
      <span className="tooltip">{title}</span>
    </div>
  );
}
