import SectionHeading from "../../components/layout/SectionHeading/SectionHeading";
import ExperienceModal from "../../components/modals/ExperienceModal";
import { useEffect, useState, useRef } from "react";

// GSAP
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

import { SlideInLeft, SlideInRight, SlideInUp } from "../../transitions/Slide";
import { FadeIn } from "../../transitions/Fade";

const ExperienceData = [
  {
    id: 1,
    title: "Generative AI Consultant",
    loc: "Jems Group",
    logo: "/logos/Jems_logo.png",
    from: "2024-09-01",
    to: "2025-07-01",
    dot: "right",
    description:
      "Specialized in developing and deploying custom AI monitoring solutions and agentic systems, focusing on enhancing system reliability and autonomous decision-making workflows.",
    responsibilities: [
      "Engineered and deployed custom Nagios plugins to extend monitoring functionality for enterprise systems",
      "Developed scalable APIs and robust data drift detection systems for Large Language Models",
      "Designed and operationalized agentic AI systems using LangChain for autonomous workflows",
      "Maintained and enhanced CI/CD pipelines to support scalable deployment of AI components",
      "Implemented monitoring solutions to ensure consistent model performance in production environments",
    ],
    achievements: [
      "Achieved 30% increase in incident detection accuracy across systems through custom monitoring plugins",
      "Boosted end-to-end process efficiency by 20% through autonomous decision-making workflows",
      "Successfully deployed scalable AI monitoring and agentic components in production environments",
      "Proactively identified and mitigated distributional shifts to maintain consistent LLM performance",
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "Pandas",
      "LangChain",
      "Flask",
      "Nagios",
      "CI/CD",
      "APIs",
      "Data Drift Detection",
    ],
  },
  {
    id: 2,
    title: "Java Backend Developer",
    loc: "NeoXam",
    logo: "/logos/neoxam_logo.png",
    from: "2024-02-01",
    to: "2024-06-01",
    dot: "right",
    description:
      "Led the design and development of comprehensive testing frameworks for financial data processing systems handling over $14 trillion worth of assets daily.",
    responsibilities: [
      "Led the design and development of Unit Testing Framework for prioritized business rules functions in NXDataHub",
      "Developed robust testing solutions using Java, JUnit4, and Mockito for high-volume financial data processing",
      "Reviewed and provided detailed feedback on 20+ pull requests to ensure code quality and project standards",
      "Integrated Continuous Integration/Deployment Pipeline processes for automated testing workflows",
      "Conducted comprehensive load/stress testing, integration testing, and end-to-end testing procedures",
    ],
    achievements: [
      "Successfully developed testing framework for systems processing $14+ trillion worth of assets per day",
      "Maintained 100% code review completion rate across 20+ pull requests",
      "Implemented comprehensive CI/CD pipeline integration improving deployment reliability",
      "Enhanced system reliability through rigorous testing methodologies and quality assurance processes",
    ],
    technologies: [
      "Java",
      "JUnit4",
      "Mockito",
      "TDD",
      "Git",
      "Docker",
      "AWS S3",
      "CI/CD",
      "Load Testing",
    ],
  },
  {
    id: 3,
    title: "Full Stack Developer",
    loc: "Accenture North America",
    logo: "/logos/accenture_logo.jpg",
    from: "2023-02-01",
    to: "2023-03-01",
    dot: "right",
    description:
      "Built and deployed full-stack web applications with automated CI/CD pipelines, focusing on performance optimization and comprehensive testing coverage.",
    responsibilities: [
      "Built product search feature using React with hooks and debouncing techniques for optimal user experience",
      "Integrated frontend components with Spring Boot REST APIs to ensure seamless data flow",
      "Dockerized both backend and frontend applications for consistent deployment environments",
      "Deployed applications to AWS ECS (Fargate) using CodePipeline for automated daily deployments",
      "Managed development tasks using JIRA and implemented GitFlow branching strategy for version control",
    ],
    achievements: [
      "Reduced average search latency by 30% through optimized React implementation with debouncing",
      "Achieved 95% test coverage through comprehensive unit and integration testing",
      "Automated daily deployments without server management using AWS ECS Fargate",
      "Maintained high code quality standards using SonarQube for static code analysis in CI pipeline",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "React",
      "Jenkins",
      "Scrum",
      "Docker",
      "AWS ECS",
      "CodePipeline",
      "JUnit",
      "Mockito",
      "Postman",
      "SonarQube",
      "JIRA",
      "GitFlow",
      "CloudWatch",
    ],
  },
];

const EducationData = [
  {
    id: 1,
    title: "Masters in Artificial Intelligence",
    loc: "Esprit School Of Business",
    logo: "/logos/esb_logo.jpg",
    from: "2024-09",
    to: "today",
    dot: "left",
    description:
      "Advanced graduate program focusing on Generative AI, and AI applications in business contexts.",
    responsibilities: [
      "Data Structures & Algorithms",
      "Linear Algebra",
      "Machine Learning",
      "Deep Learning",
      "Big Data",
      "Prompt Engineering",
      "Computer Vision",
      "Natural Language Processing",
      "Project Management",
      "Probability and Statistics",
      "Data Visualization",
      "MLOps",
    ],
    achievements: [
      "Graduated 1st semester with distinction (GPA: 3.8/4.0)",
      "Led team project that won 'Best AI Innovation' award",
      "Completed internship resulting in full-time job offer",
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Jupyter",
      "Git",
    ],
  },
  {
    id: 3,
    title: "Manara Software Engineering Program",
    loc: "United States",
    logo: "/logos/manara_logo.png",
    from: "2024-02",
    to: "today",
    dot: "left",
    description:
      "Intensive software engineering program focused on preparing students for careers at top tech companies through hands-on projects and mentorship.",
    responsibilities: [
      "Completed intensive coding bootcamp covering full-stack development",
      "Participated in mock technical interviews and coding challenges",
      "Worked on collaborative projects with international team members",
      "Attended workshops on system design and software architecture",
    ],
    achievements: [
      "Completed 300+ coding challenges with 95% success rate",
      "Built and deployed 3 full-stack applications",
      "Received mentorship from senior engineers at FAANG companies",
      "Improved technical interview skills through structured practice",
    ],
    technologies: [
      "JavaScript",
      "React",
      "Node.js",
      "Python",
      "SQL",
      "MongoDB",
      "AWS",
      "Docker",
    ],
  },
  {
    id: 4,
    title: "B.S. in Computer Science",
    loc: "Esprit School Of Business",
    logo: "/logos/esb_logo.jpg",
    from: "2021-09",
    to: "2024-06",
    dot: "left",
    description:
      "Comprehensive undergraduate program covering fundamental computer science concepts, programming, and software engineering principles.",
    responsibilities: [
      "Data Structures & Algorithms",
      "Java Programming",
      "Python Programming",
      "C++ Programming",
      "Web Development",
      "Networking",
      "Linear Algebra and Calculus",
      "Object-Oriented Programming",
      "Database Management",
      "Statistics and probability",
      "Seminars",
      "Marketing",
      "Business Intelligence",
      "ERP"
    ],
    achievements: [
      "Graduated Magna Cum Laude with GPA 3.7/4.0",
      "Won 2nd place in university-wide hackathon competition",
      "Served as teaching assistant for Introduction to Programming course",
      "Led student programming club with 50+ active members",
    ],
    technologies: [
      "Java",
      "C++",
      "Python",
      "JavaScript",
      "React",
      "SQL",
      "Git",
      "Linux",
      "Android Development",
    ],
  },
];

function Experience() {
  const expContainerRef = useRef();
  const expTimeline = useRef();
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleExperienceClick = (experienceData) => {
    setSelectedExperience(experienceData);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedExperience(null);
  };

  useGSAP(
    () => {
      expTimeline.current = gsap.timeline({
        scrollTrigger: {
          trigger: expContainerRef.current,
          start: "top 50%",
          // markers: true,
          toggleActions: "play none none none",
        },
      });

      expTimeline.current
        .add(
          SlideInUp(expContainerRef.current.querySelectorAll(".slide-in-up")),
        )
        .add(
          [
            SlideInLeft(
              expContainerRef.current.querySelectorAll(".slide-in-left"),
            ),
            SlideInRight(
              expContainerRef.current.querySelectorAll(".slide-in-right"),
            ),
            FadeIn(expContainerRef.current.querySelectorAll(".fade-in")),
          ],
          "<",
        );

      return () => {
        expTimeline.current.kill();
      };
    },
    {
      scope: expContainerRef, // Limits selector to children of container
      dependencies: [], // Run once after mount
      revertOnUpdate: false, // optional
    },
  );

  return (
    <section id="experience" className="section" ref={expContainerRef}>
      <div className="container mx-auto flex max-w-[var(--container-width)] flex-col gap-12">
        <div className="slide-in-up">
          <SectionHeading
            label="Experience"
            title="Where I’ve Been & What I’ve Done"
            title_text="In recent years, I’ve been on a mission using my skills to fuel business growth and craft more meaningful digital experiences."
            direction="row"
            text_m_width=""
            title_m_width="max-w-70"
          />
        </div>
        <div className="flex flex-col gap-8 md:flex-row md:gap-0">
          <h3 className="text-center text-xl font-medium tracking-tight md:hidden">
            Experience
          </h3>

          <div className="slide-in-left flex flex-1 flex-col gap-2 md:gap-4">
            {ExperienceData.map((item) => (
              <ExperienceCard
                key={item.id}
                {...item}
                onClick={() => handleExperienceClick(item)}
              />
            ))}
          </div>

          <div className="fade-in relative hidden flex-col justify-between md:flex">
            <span className="absolute left-1/2 h-full w-[3px] -translate-x-1/2 bg-stone-200"></span>
          </div>

          <h3 className="text-center text-xl font-medium tracking-tight md:hidden">
            Education
          </h3>

          <div className="slide-in-right flex flex-1 flex-col gap-2 md:gap-4">
            {EducationData.map((item) => (
              <ExperienceCard
                key={item.id}
                {...item}
                onClick={() => handleExperienceClick(item)}
              />
            ))}
          </div>
        </div>

        {/* Experience Modal */}
        <ExperienceModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          {...selectedExperience}
        />
      </div>
    </section>
  );
}

export default Experience;

// EXPERIENCE CARD

function ExperienceCard({
  title = "Web Developer",
  loc = "IFS",
  logo = "/logo.png",
  from = "2018-01-01",
  to = "today",
  dot = "right",
  onClick,
}) {
  useEffect(() => {
    setExpTime(calcDate(startDate, endDate));
  }, []);

  const [expTime, setExpTime] = useState("0 mos");
  const startDate = new Date(from);
  const endDate = to === "today" ? new Date() : new Date(to);
  const startDateString = formatExpDate(startDate);
  const endDateString = to === "today" ? "Present" : formatExpDate(endDate);

  const dotRight = dot === "right";
  const dotLeft = dot === "left";

  return (
    <div
      className={`flex items-center justify-center ${dotLeft ? "flex-row-reverse" : "flex-row"}`}
    >
      <div
        className="flex w-full cursor-pointer flex-row items-start gap-5 rounded-xl bg-stone-100 px-4 py-4.5 transition-colors hover:bg-stone-200"
        onClick={onClick}
      >
        <img
          className="max-h-16 rounded-lg"
          src={`${logo}`}
          alt={`Logo of ${loc}`}
        />

        <div className="relative">
          <h6 className="text-lg font-medium tracking-tight">{title}</h6>
          <p className="text-sm text-[var(--primary-mid-blue)]">{loc}</p>
          <p className="text-sm text-[var(--primary-dark-blue)]/75">
            {startDateString} - {endDateString} · {expTime}
          </p>
        </div>
      </div>
      <div className={`relative hidden w-6 flex-row items-center md:flex`}>
        <div className="h-[3px] w-full bg-stone-200"></div>
        <div
          className={`absolute z-2 mx-auto h-4 w-4 min-w-4 rounded-full bg-stone-200 ${dotLeft ? "left-0 -translate-x-1/2" : "right-0 translate-x-1/2"}`}
        ></div>
      </div>
    </div>
  );
}

function calcDate(startDate, endDate) {
  const yearsDiff = endDate.getFullYear() - startDate.getFullYear();
  const monthsDiff = endDate.getMonth() - startDate.getMonth();
  const totalMonths = yearsDiff * 12 + monthsDiff;

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  return `${years} yrs ${months} mos`;
}

function formatExpDate(date) {
  const month = date.toLocaleString("en-US", { month: "short" });
  const year = date.getFullYear();
  return `${month} ${year}`;
}
