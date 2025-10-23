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
    to: "2025-09-01",
    dot: "right",
    responsibilities: [
      "Built an enterprise Copilot for Peugeot powered by Gemini and BigQuery, implementing RAG architecture to enable intelligent document search and contextual AI assistance, improving knowledge management efficiency across teams.",
      "Deployed enterprise-scale AI voice assistants (Whisper -> GPT → Eleven Labs over WebSockets) for Orange Telecom, automating 60% of Tier-1 support calls and reducing average handling time by 40%, resulting in $12M+ annual cost savings.",
      "Developed scalable APIs and robust data drift detection monitoring for LLMs, tracking model behavior over time to identify when input data patterns changed and maintaining consistent prediction quality.",
      "Designed and implemented agentic AI systems using LangChain, enabling autonomous decision-making workflows and boosting end-to-end process efficiency by 20%.",
    ],
    technologies: [
      "Python",
      "Node.js/TS",
      "TensorFlow",
      "LangChain",
      "OpenAI",
      "Qdrant",
      "WebSocket",
      "AWS SageMaker",
      "Prompt Engineering",
    ],
  },
  {
    id: 2,
    title: "Backend Developer",
    loc: "NeoXam",
    logo: "/logos/neoxam_logo.png",
    from: "2024-02-01",
    to: "2024-07-01",
    dot: "right",
    responsibilities: [
      "Led the design and the development of Unit Testing Framework for a prioritized set of functions for business rules in NXDataHub, successfully processing more than $14 trillion worth of assets per day, using the latest technology of AWS (EC2, ECR, RDS, S3, Route 53), Java, Junit4 and Mockito.",
      "Reviewed and provided feedback on +20 pull requests ensuring code quality to project standards.",
      "CI/CD pipeline integration, load/stress testing, integration/e2e testing.",
    ],
    technologies: [
      "Java",
      "Spring",
      "Junit4",
      "Mockito",
      "Docker",
      "Jenkins",
      "Kubernetes",
      "AWS",
      "ERP Integration",
      "Presales Support",
    ],
  },
  {
    id: 3,
    title: "Freelance Software Engineer",
    loc: "Self-employed",
    logo: "/logos/self_employed_logo.jpeg",
    from: "2021-09-01",
    to: "2024-01-01",
    dot: "right",
    responsibilities: [
      "StudyBuddy - AI-Powered Study Platform: Built a collaborative learning platform that allows real-time study sessions, chat messaging via Django Channels/WebSockets, and AI-powered content generation for students.",
      "StudyBuddy: Integrated Llama 3.1 for automated study material summarization, intelligent note generation and adaptive quiz creation, reducing content preparation time by 40%.",
      "StudyBuddy: Implemented secure authentication and PostgreSQL database with API endpoints achieving <200ms response times.",
      "BlinkPost - Social Media Application: Crafted appealing layouts and reusable component library using modern design principles, implementing responsive UI patterns with Tailwind CSS and Shadcn components.",
      "BlinkPost: Deployed the full-stack application to Vercel with automatic preview environments, integrating webhooks for real-time updates and UploadThing for file uploads.",
      "Alpha Code - AI-Powered Code Editor: Currently developing an AI-powered code editor built with Next.js and LangChain agents, offering real-time code generation, refactoring and debugging assistance while autonomously handling complex tasks such as environment setup and deployment automation.",
      "Alpha Code: Enabled one-click deployments by containerizing user projects with Docker and linking to container registries (Docker Hub) for deployment.",
      "LiveLine - Real-Time Chat Application: Developed an open-source real-time chat application with WebSocket-based messaging, supporting concurrent user sessions with instant message delivery and persistent chat history.",
      "LiveLine: Created a CI/CD pipeline using GitHub Actions that automatically builds, tests, and deploys the application to AWS, which accelerates release cycles through continuous delivery and infrastructure automation.",
    ],
    technologies: [
      "Python",
      "Django REST Framework",
      "PostgreSQL",
      "Ollama",
      "Django",
      "React",
      "Vite",
      "WebSockets",
      "Next.js",
      "Node.js",
      "TypeScript",
      "TailwindCSS",
      "MongoDB",
      "UploadThing",
      "Shadcn",
      "Webhooks",
      "Vercel",
      "Docker",
      "OpenAI API",
      "LangChain",
      "GitHub Container Registry",
      "CI/CD Automation",
      "MySQL",
      "ReactJS",
      "GitHub Actions",
      "AWS",
    ],
  },
  {
    id: 4,
    title: "Full Stack Developer",
    loc: "Accenture North America",
    logo: "/logos/accenture_logo.jpg",
    from: "2023-02-01",
    to: "2023-03-01",
    dot: "right",
    responsibilities: [
      "Built a real-time product search feature using React with hooks and debouncing, integrated with FastAPI REST endpoints that reduced average search latency by 30%.",
      "Containerized the Python backend and React frontend using Docker, and deployed them on AWS ECS (Fargate) through a GitHub Actions CI/CD pipeline to support frequent deployments with minimal infrastructure management.",
      "Implemented thorough testing using Pytest and Postman for API validation achieved 95% code coverage and integrated SonarQube for static analysis and code quality enforcement in CI pipelines.",
      "Managed development workflows with JIRA, followed GitFlow branching strategy, and monitored production health metrics (response time, error rates) using AWS CloudWatch and custom dashboards.",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "React",
      "Pytest",
      "Docker",
      "GH Actions",
      "AWS (ECS/CloudWatch)",
      "Elasticsearch",
      "TailwindCSS",
    ],
  },
  {
    id: 5,
    title: "Backend Developer",
    loc: "BTS Bank",
    logo: "/logos/bts_bank_logo.jpeg",
    from: "2023-02-01",
    to: "2023-03-01",
    dot: "right",
    responsibilities: [
      "Contributed to the development of a comprehensive internal CRM web application at BTS Bank that streamlined operational workflows and improved customer service.",
      "Designed and implemented a complaint management module using Python (FastAPI) and PostgreSQL that tracks and automatically routes reports through RESTful APIs for frontend integration.",
      "Collaborated with IT and business stakeholders to gather requirements, define API contracts, and deliver production-ready features through agile sprints and continuous feedback loops.",
      "Optimized backend performance by refactoring database queries with SQLAlchemy ORM, implementing connection pooling, and adding Redis caching, which reduced average API response time by 45%.",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "React",
      "Docker",
      "GitHub Actions",
      "Tailwind CSS",
    ],
  },
  {
    id: 6,
    title: "Backend Developer",
    loc: "TunisieTradeNet",
    logo: "/logos/TTN_logo.png",
    from: "2022-06-01",
    to: "2022-09-01",
    dot: "right",
    responsibilities: [
      "Refactored a monolithic foreign exchange system into microservices using Spring Boot, with dedicated databases and GraphQL APIs to improve scalability and reduce latency.",
      "Developed GraphQL schemas and resolvers for efficient, precise data fetching across complex entity relationships using JPA entity graphs.",
      "Containerized services with Docker and deployed on cloud platforms (AWS ECS/Kubernetes) with automated CI/CD to ensure smooth releases.",
    ],
    technologies: [
      "UML",
      "Java",
      "Spring Boot",
      "Hibernate",
      "PostgresSQL",
    ],
  },
];

const EducationData = [
  {
    id: 1,
    title: "Master's in Artificial Intelligence",
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
    id: 2,
    title: "Manara Software Engineering Program",
    loc: "United States",
    logo: "/logos/manara_logo.png",
    from: "2024-02",
    to: "2025-08",
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
    id: 3,
    title: "Bachelor's in Computer Science",
    loc: "Esprit School Of Business",
    logo: "/logos/esb_logo.jpg",
    from: "2021-09",
    to: "2024-06",
    dot: "left",
    description:
      "Undergraduate program covering fundamental computer science concepts, programming, and software engineering principles.",
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
      "ERP",
    ],
    achievements: [
      "Graduated with GPA 3.7/4.0",
      "Won 2nd place in university-wide hackathon competition",
      "Led student programming club ATIA with 50+ active members",
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

  // Only show years if 1 year or more
  if (years >= 1) {
    if (months === 0) {
      return years === 1 ? `${years} year` : `${years} years`;
    } else {
      return years === 1 ? `${years} year ${months} months` : `${years} years ${months} months`;
    }
  } else {
    return `${months} months`;
  }
}

function formatExpDate(date) {
  const month = date.toLocaleString("en-US", { month: "short" });
  const year = date.getFullYear();
  return `${month} ${year}`;
}
