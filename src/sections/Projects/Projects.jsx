import SectionHeading from "../../components/layout/SectionHeading/SectionHeading";
import ProjectCard from "../../components/cards/ProjectCards/Card/ProjectCard";
import ProjectModal from "../../components/modals/ProjectModal";
import CertificateModal from "../../components/modals/CertificateModal";
import MiniProjectsCardSlider from "../../components/layout/MiniProjectsCardSlider";
import CertificatesCardSlider from "../../components/layout/CertificatesCardSlider";

import { useRef, useState } from "react";
import { SlideInUp } from "../../transitions/Slide";

const certificatesProjectsList = [
  {
    title: "Apollo Graph Developer - Associate",
    ghLink: "",
    imgSrc: "/thumbnails/certificates/Graph Developer - Associate.png",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    ghLink: "",
    imgSrc: "/thumbnails/certificates/AWS Certified Cloud Practitioner.png",
  },
  {
    title: "Google Data Analytics Professional Certificate",
    ghLink: "",
    imgSrc:
      "/thumbnails/certificates/Google Data Analytics Professional Certificate.png",
  },
  {
    title: "Scrum Fundamentals Certified (SFC)",
    ghLink: "",
    imgSrc: "/thumbnails/certificates/Scrum Fundamentals Certified (SFC).png",
  },
  {
    title: "EF SET English Certificate (C2 Proficient)",
    ghLink: "",
    imgSrc:
      "/thumbnails/certificates/EF SET English Certificate (C2 Proficient).png",
  },
  {
    title:
      "Accenture North America - Coding- Development & Advanced Engineering Job Simulation",
    ghLink: "",
    imgSrc:
      "/thumbnails/certificates/Accenture North America - Coding- Development & Advanced Engineering Job Simulation.png",
  },
  {
    title: "KMPG Australia - Virtual Experience Program Participant",
    ghLink: "",
    imgSrc:
      "/thumbnails/certificates/KMPG Australia - Virtual Experience Program Participant.png",
  },
  {
    title: "J.P. Morgan Private Bank - Investment Banking Virtual Experience",
    ghLink: "",
    imgSrc:
      "/thumbnails/certificates/J.P. Morgan Private Bank - Investment Banking Virtual Experience.png",
  },
  {
    title: "Java Certificate",
    ghLink: "",
    imgSrc: "/thumbnails/certificates/Java Certificate.png",
  },
  {
    title: "Manara GenAI",
    ghLink: "",
    imgSrc: "/thumbnails/certificates/Manara GenAI.png",
  },
  {
    title: "AWS Building a Machine Learning Ready Organization",
    ghLink: "",
    imgSrc:
      "/thumbnails/certificates/Building a Machine Learning Ready Organization.png",
  },
  {
    title: "Financial Modeling",
    ghLink: "",
    imgSrc: "/thumbnails/certificates/Financial Modeling.png",
  },
  {
    title: "React Applications Specialization",
    ghLink: "",
    imgSrc: "/thumbnails/certificates/React Applications Specialization.png",
  },
  {
    title: "Designing Agentic Systems with LangChain",
    ghLink: "",
    imgSrc:
      "/thumbnails/certificates/Designing Agentic Systems with LangChain.png",
  },
  {
    title: "Developing LLM Applications with LangChain",
    ghLink: "",
    imgSrc:
      "/thumbnails/certificates/Developing LLM Applications with LangChain.png",
  },
  {
    title: "Developing Machine Learning Models for Production",
    ghLink: "",
    imgSrc:
      "/thumbnails/certificates/Developing Machine Learning Models for Production.png",
  },
  {
    title: "Fine-Tuning with Llama 3",
    ghLink: "",
    imgSrc: "/thumbnails/certificates/Fine-Tuning with Llama 3.png",
  },
  {
    title: "Intermediate Deep Learning with PyTorch",
    ghLink: "",
    imgSrc:
      "/thumbnails/certificates/Intermediate Deep Learning with PyTorch.png",
  },
  {
    title: "Introduction to LLMs in Python",
    ghLink: "",
    imgSrc: "/thumbnails/certificates/Introduction to LLMs in Python.png",
  },
  {
    title: "Supervised Learning with scikit-learn",
    ghLink: "",
    imgSrc:
      "/thumbnails/certificates/Supervised Learning with scikit-learn.png",
  },
  {
    title: "Unsupervised Learning in Python",
    ghLink: "",
    imgSrc: "/thumbnails/certificates/Unsupervised Learning in Python.png",
  },
  {
    title: "LLMs",
    ghLink: "",
    imgSrc: "/thumbnails/certificates/LLMs.png",
  },
  {
    title: "Deep Learning with TensorFlow",
    ghLink: "",
    imgSrc: "/thumbnails/certificates/Deep Learning with TensorFlow.png",
  },
];

const SmallProjectsList = [
  {
    title: "Forecasting USD-TND Exchange Rates",
    ghLink: "https://github.com/sirine707/forecasting-usd-tnd-exchange-rates",
    imgSrc: "/thumbnails/miniproject/proj1.jpg",
  },
  {
    title: "Vision - Real-Time Object Detection",
    ghLink: "https://github.com/sirine707/real-time-object-detection",
    imgSrc: "/thumbnails/miniproject/proj2.jpg",
  },
  {
    title: "Big Data Pipeline for Retail Data Analysis",
    ghLink: "https://github.com/sirine707/big-data-retail-data-analysis",
    imgSrc: "/thumbnails/miniproject/proj3.png",
  },
  {
    title: "ExamGenius - Exam Preparation Platform",
    ghLink: "https://github.com/sirine707/exam-genius",
    imgSrc: "/thumbnails/miniproject/proj4.png",
  },
  {
    title: "BlinkPost - Social Media Post Generator",
    ghLink: "https://github.com/sirine707/blink-post",
    imgSrc: "/thumbnails/miniproject/proj5.png",
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
  const [certificateData, setCertificateData] = useState(null);
  const [isCertificateModalOpen, setIsCertificateModalOpen] = useState(false);

  const handleProjectClick = (projectData) => {
    setModalData(projectData);
    setIsModalOpen(true);
  };

  const handleCertificateClick = (certificateData) => {
    setCertificateData(certificateData);
    setIsCertificateModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalData(null);
  };

  const handleCloseCertificateModal = () => {
    setIsCertificateModalOpen(false);
    setCertificateData(null);
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
          {/* New Featured Projects */}
          <div className="slide-in-up flex flex-col gap-8 md:flex-row md:gap-4 lg:gap-5">
            <ProjectCard
              title="PDF Guru Clone — PDF Management Solution"
              desc="A full-featured PDF management platform with AI-powered summarization, file conversion, and editing capabilities. (Next.js, TypeScript, Express, PostgreSQL, OpenAI)"
              fullDescription="PDF Guru Clone is a comprehensive take-home project that demonstrates modern web development capabilities with advanced PDF management features. The platform includes three main modules: PDF Converter (supporting 18+ file formats), PDF Editor with PSPDFKit integration, and an AI-powered Summarizer using OpenAI's Assistant API. Built with Next.js App Router and Express backend, it features JWT authentication, internationalization (English & French), and a clean, modular architecture."
              technologies={[
                "Next.js 15",
                "TypeScript",
                "Express.js",
                "PostgreSQL",
                "Prisma ORM",
                "OpenAI API",
                "PSPDFKit Web SDK",
                "next-intl",
                "JWT Authentication",
                "ConvertAPI",
                "Tailwind CSS",
              ]}
              features={[
                "PDF Converter: Support for 18+ file format conversions (PDF↔Word, Excel, JPG, PNG, etc.)",
                "AI-Powered Summarizer: Intelligent document analysis with thread-based conversations using OpenAI Assistant API",
                "PDF Editor: Client-side PDF editing with PSPDFKit (annotations, signatures, forms)",
                "Multi-language Support: Fully internationalized interface in English and French",
                "User Authentication: Secure JWT-based authentication with bcrypt password hashing",
                "File Management: Drag-and-drop uploads with 10MB file size support",
                "Responsive Design: Modern, clean UI optimized for all devices",
                "Modal-based Workflow: Smooth user experience with loading states and success feedback",
              ]}
              ghLink="https://github.com/sirine707/pdfguru-clone-take-home-project"
              liveLink="https://pdfguru-clone.sirinejnayeh.com"
              imgSrc="thumbnails/pdfguru-clone-take-home-project.png"
              onCardClick={handleProjectClick}
            />
            <ProjectCard
              title="Dubai Real Estate Data Analytics"
              desc="Comprehensive data analysis of Dubai's real estate market with interactive visualizations and insights. (Python, Pandas, Plotly, Seaborn)"
              fullDescription="Dubai Real Estate Data Analytics is an exploratory data analysis project that examines Dubai's real estate market through comprehensive statistical analysis and interactive visualizations. The project analyzes property trends, pricing patterns, location-based insights, and market dynamics using real-world data. It features interactive dashboards, geographical heat maps, and predictive analytics to uncover valuable insights about Dubai's property market."
              technologies={[
                "Python",
                "Pandas",
                "NumPy",
                "Plotly",
                "Seaborn",
                "Matplotlib",
                "Jupyter Notebook",
                "Data Visualization",
                "Statistical Analysis",
              ]}
              features={[
                "Property Price Analysis: Statistical analysis of pricing trends across different property types and locations",
                "Interactive Dashboards: Dynamic visualizations using Plotly for exploring market data",
                "Location Intelligence: Geographical analysis of property distribution and pricing by area",
                "Market Trends: Time-series analysis of property market evolution and seasonal patterns",
                "Comparative Analysis: Property type comparisons (apartments, villas, townhouses) with detailed metrics",
                "Data Cleaning & Processing: Robust data preprocessing pipeline for handling real-world datasets",
                "Visual Insights: Beautiful charts, heat maps, and correlation matrices for pattern discovery",
                "Statistical Metrics: Comprehensive statistical summaries including mean, median, distribution analysis",
              ]}
              ghLink="https://github.com/sirine707/dubai-real-estate-data-analytics"
              liveLink="https://re-data-analytics.sirinejnayeh.com"
              imgSrc="thumbnails/dubai-real-estate-data-analytics.png"
              onCardClick={handleProjectClick}
            />
          </div>

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
              liveLink=""
              imgSrc="thumbnails/proj1.png"
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
              liveLink=""
              imgSrc="thumbnails/proj2.png"
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
              liveLink="https://alpha-code-delta.vercel.app/"
              imgSrc="thumbnails/proj3.png"
              onCardClick={handleProjectClick}
            />

            <ProjectCard
              title="SmartMedia&nbsp; — &nbsp;Coming Next..."
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
              ghLink="https://github.com/sirine707"
              liveLink=""
              imgSrc="thumbnails/TelegramYTDLBot.png"
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
              <CertificatesCardSlider
                certificatesList={certificatesProjectsList}
                onCertificateClick={handleCertificateClick}
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

      {/* Certificate Modal */}
      <CertificateModal
        isOpen={isCertificateModalOpen}
        onClose={handleCloseCertificateModal}
        title={certificateData?.title}
        imgSrc={certificateData?.imgSrc}
      />
    </section>
  );
}

export default Projects;
