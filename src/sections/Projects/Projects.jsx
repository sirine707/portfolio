import SectionHeading from "../../components/layout/SectionHeading/SectionHeading";
import ProjectCard from "../../components/cards/ProjectCards/Card/ProjectCard";
import ProjectModal from "../../components/modals/ProjectModal";
import MiniProjectsCardSlider from "../../components/layout/MiniProjectsCardSlider";

import { useRef, useState } from "react";
import { SlideInUp } from "../../transitions/Slide";

const certificatesProjectsList = [
  {
    title: "AWS Cloud Practitioner",
    ghLink: "",
    imgSrc: "/ProjectThumbs/certificates/aws.png",
  },
  {
    title: "Developing LLM Applications with LangChain",
    ghLink: "",
    imgSrc: "/ProjectThumbs/certificates/2.png",
  },
  {
    title: "Designing Agentic Systems with LangChain",
    ghLink: "",
    imgSrc: "/ProjectThumbs/certificates/3.png",
  },
  {
    title: "Fine-Tuning with Llama 3",
    ghLink: "",
    imgSrc: "/ProjectThumbs/certificates/5.png",
  },
  {
    title: "Developing Machine Learning Models for Production",
    ghLink: "",
    imgSrc: "/ProjectThumbs/certificates/6.png",
  },
  {
    title: "Data Analytics Consulting",
    ghLink: "",
    imgSrc: "/ProjectThumbs/certificates/8.png",
  },
  {
    title: "Development and advanced Engineering",
    ghLink: "",
    imgSrc: "/ProjectThumbs/certificates/9.png",
  },
  {
    title: "React Fundamentals",
    ghLink: "",
    imgSrc: "/ProjectThumbs/certificates/react.png",
  },
  {
    title: "Java Certification",
    ghLink: "",
    imgSrc: "/ProjectThumbs/certificates/10.png",
  },
];
const SmallProjectsList = [
  {
    title: "Forecasting USD-TND Exchange-Rates",
    ghLink: "https://github.com/sirine707/Forecasting-USD-TND-Exchange-Rates",
    imgSrc: "/ProjectThumbs/miniproject/proj1.jpg",
  },
  {
    title: "Vision - RealTime Object Detection",
    ghLink: "https://github.com/sirine707/Real-Time-Object-Detection",
    imgSrc: "/ProjectThumbs/miniproject/proj2.jpg",
  },
  {
    title: "BigData Pipeline For Retail Data Analysis",
    ghLink: "https://github.com/sirine707/BigData_project/tree/master",
    imgSrc: "/ProjectThumbs/miniproject/proj3.png",
  },
  {
    title: "ExamGenius - Exam Preparation Platform",
    ghLink: "https://github.com/sirine707/ExamGenius",
    imgSrc: "/ProjectThumbs/miniproject/proj4.png",
  },
  {
    title: "BlinkPost - Social Media Post Generator",
    ghLink: "https://github.com/sirine707/BlinkPost",
    imgSrc: "/ProjectThumbs/miniproject/proj5.png",
  },
];
// GSAP
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const projectsContainerRef = useRef();
  const projectsTimeline = useRef();
  const [modalData, setModalData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (projectData) => {
    setModalData(projectData);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalData(null);
  };

  useGSAP(
    () => {
      projectsTimeline.current = gsap.timeline({
        // paused: true,
        scrollTrigger: {
          trigger: projectsContainerRef.current,
          start: "top 50%",
          // markers: true,
          toggleActions: "play none none none",
        },
      });
      projectsTimeline.current.pause();

      projectsTimeline.current.add(
        SlideInUp(
          projectsContainerRef.current.querySelectorAll(".slide-in-up"),
        ),
      );

      return () => {
        projectsTimeline.current.kill();
      };
    },
    {
      scope: projectsContainerRef, // Limits selector to children of container
      dependencies: [], // Run once after mount
      revertOnUpdate: false, // optional
    },
  );

  return (
    <section id="projects" className="section" ref={projectsContainerRef}>
      <div className="container mx-auto flex max-w-[var(--container-width)] flex-col gap-12">
        <div className="slide-in-up">
          <SectionHeading
            label="Projects"
            title="Projects & Work I'm Proud Of"
            title_text="Here is some of the recent work I've done using my programming and problem-solving skills."
            direction="row"
            text_m_width=""
            title_m_width="max-w-70"
          />
        </div>

        <div className="flex flex-col gap-10">
          <div className="slide-in-up flex flex-col gap-8 md:flex-row md:gap-4 lg:gap-5">
            <ProjectCard
              title="EmiratEstate — Real Estate Platform"
              desc="Modern platform for discovering, buying, renting, and managing properties. (React, Node.js, Express, MongoDB, AI, ImageKit)"
              fullDescription="EmiratEstate is a modern real estate platform designed to help users discover, buy, rent, and manage properties with ease. It features advanced property search, AI-powered recommendations, appointment scheduling, and a robust admin dashboard for property management. The platform is built for scalability, security, and a seamless user experience."
              technologies={[
                "React",
                "Node.js",
                "Express",
                "MongoDB",
                "AI",
                "ImageKit",
                "JWT Authentication",
                "Responsive Design",
              ]}
              features={[
                "Advanced Property Search: Filter by location, price, property type, amenities, and more.",
                "AI-Powered Recommendations: Personalized property suggestions and market analysis using AI models.",
                "Appointment Scheduling: Users can book property viewings and manage appointments.",
                "User Account Management: Secure authentication, profile customization, favorites, and notifications.",
                "Admin Dashboard: Manage properties, users, appointments, and view analytics.",
                "Newsletter System: Automated property updates and market trends delivered via email.",
                "Image Upload & Management: Integrated with ImageKit for fast and secure image hosting.",
                "Responsive Design: Fully optimized for desktop and mobile devices.",
              ]}
              ghLink="https://github.com/sirine707/Real-Estate"
              liveLink="https://emiratestate.pages.dev/"
              imgSrc="ProjectThumbs/proj1.png"
              onCardClick={handleProjectClick}
            />
            <ProjectCard
              title="Study Buddy — Collaborative Learning Platform"
              desc="Full-stack web app for collaborative study sessions, chat, AI-powered notes, quizzes, and secure management. (Django, React, PostgreSQL, Ollama, Stripe)"
              fullDescription="Ensuite - Study Buddy is a full-stack web application designed to enhance collaborative learning. It combines a robust Django backend with a modern React frontend, providing tools for study session management, interactive chat, AI-powered summarization, notes and quiz generation, and secure user and payment management. The platform supports real-time communication and offers a responsive user experience across devices."
              technologies={[
                "Python 3.10+",
                "Django 4.1",
                "PostgreSQL",
                "Ollama",
                "Node.js v18.20.5",
                "React",
                "Vite",
                "HTML/CSS",
              ]}
              features={[
                "User Registration, Login, and Profile Management",
                "Study Session Creation and Management",
                "Real-Time Chat Messaging Between Users",
                "Summarize Study Materials Using AI",
                "Generate and Organize Notes",
                "Quiz Creation with Multiple Tones (flashcards, multiple choice, conversational)",
                "Retrieve Device and Browser Information",
                "Stripe Payment Processing Endpoints",
                "Email Notification Triggers",
                "Admin Endpoints for Managing Users and Sessions",
              ]}
              ghLink="https://github.com/sirine707/ensuite-study-buddy"
              liveLink="https://study-buddy.pages.dev/"
              imgSrc="ProjectThumbs/proj2.png"
              onCardClick={handleProjectClick}
            />
          </div>

          <div className="slide-in-up flex flex-col gap-8 md:flex-row md:gap-4 lg:gap-5">
            <ProjectCard
              title="AlphaCode — Cloud Developer IDE"
              desc="Modern, extensible, and cloud-ready developer interface inspired by VS Code. (Next.js, TypeScript, Tailwind CSS, Docker, Kubernetes, Copilot AI)"
              fullDescription="AlphaCode is a modern developer interface inspired by Visual Studio Code, designed to provide a beautiful, extensible, and cloud-ready environment for code editing, deployment, and collaboration. It features a familiar layout with file explorer, tabs, activity bar, and command palette, and supports advanced workflows such as Docker integration, cloud deployment, and Kubernetes YAML editing. AlphaCode is built for both local and cloud-hosted development, making it ideal for individuals and teams who want a seamless, modern coding experience."
              technologies={[
                "Next.js 15+",
                "TypeScript",
                "Tailwind CSS",
                "Docker",
                "Cloud Providers (AWS, Azure, GCP)",
                "Kubernetes",
                "Copilot & Autocompletion",
              ]}
              features={[
                "VS Code-inspired UI: Familiar layout with file explorer, tabs, activity bar, and command palette",
                "Copilot AI Assistant: Built-in Copilot feature for code suggestions and smart completions",
                "Autocompletion: Intelligent code autocompletion for faster development",
                "Dockerfile Generation & Automation: Generate Dockerfiles automatically, build images, and push to any repository the user chooses",
                "Docker Integration: Build, push, and deploy containers directly from the UI",
                "Cloud Provider Support: AWS, Azure, GCP, and more",
                "Kubernetes YAML Editor: Edit and apply deployment/service configs",
                "Extensible Components: Easily add new panels, hooks, and UI elements",
                "Hosted Mode: Push images to Docker Hub when running in cloud/hosted environments",
              ]}
              ghLink="https://github.com/sirine707/AlphaCode"
              liveLink="#"
              imgSrc="ProjectThumbs/proj3.png"
              onCardClick={handleProjectClick}
            />

            <ProjectCard
              title="SmartMedia&nbsp; — &nbsp;Coming Next .."
              desc="Telegram bot to download YouTube videos in various qualities up to 4K resolution. (Python, pyTelegramBotAPI)"
              fullDescription="SmartMedia is an advanced Telegram bot that enables users to download YouTube videos directly through Telegram chat. Built with Python and the pyTelegramBotAPI library, this bot supports multiple video qualities including 4K resolution, audio-only downloads, and provides a user-friendly interface for selecting download preferences. The bot handles video processing efficiently and delivers files directly to users' Telegram chats."
              technologies={[
                "Python",
                "pyTelegramBotAPI",
                "yt-dlp",
                "FFmpeg",
                "Telegram Bot API",
              ]}
              features={[
                "Download YouTube videos up to 4K resolution",
                "Multiple quality options (144p to 4K)",
                "Audio-only download support (MP3/M4A)",
                "Batch download capabilities",
                "Video format conversion",
                "Download progress tracking",
                "File size optimization",
                "User-friendly command interface",
                "Error handling and retry mechanisms",
              ]}
              ghLink="#"
              liveLink="#"
              imgSrc="ProjectThumbs/TelegramYTDLBot.png"
              onCardClick={handleProjectClick}
            />
          </div>

          <div className="slide-in-up mt-4">
            <MiniProjectsCardSlider miniProjectsList={SmallProjectsList} />
          </div>
          <div className="slide-in-up mt-4">
            <SectionHeading
              label="Achievements"
              title="Certificates & Achievements"
              title_text=""
              direction="row"
              text_m_width=""
              title_m_width="max-w-70"
            />
            <div className="mt-8">
              <MiniProjectsCardSlider
                miniProjectsList={certificatesProjectsList}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={modalData?.title}
        description={modalData?.description}
        fullDescription={modalData?.fullDescription}
        technologies={modalData?.technologies}
        features={modalData?.features}
        ghLink={modalData?.ghLink}
        liveLink={modalData?.liveLink}
        imgSrc={modalData?.imgSrc}
        headerImgSrc={modalData?.headerImgSrc}
      />
    </section>
  );
}

export default Projects;
