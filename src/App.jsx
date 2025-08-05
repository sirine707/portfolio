import "./App.css";

// import AnnouncementBar from "./components/layout/AnnouncementBar";
import Header from "./sections/Header/Header";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Blog from "./sections/Blog/Blog";
import Skills from "./sections/Skills/Skills";
import Experience from "./sections/Experience/Experience";
import BackToTopButton from "./components/Buttons/BackToTopButton";
import Footer from "./sections/Footer/Footer";

// Nav Items
export const NavItems = [
  { linkName: "Home", url: "/#hero" },
  { linkName: "Projects", url: "#projects" },
  { linkName: "Blog", url: "#blog" },
  { linkName: "Skills", url: "#skills" },
  { linkName: "Experience", url: "#experience" },
  { linkName: "Contact", url: "#cta" },
];

function App() {
  return (
    <>
      {/* <AnnouncementBar /> */}

      <Header />

      <Hero />

      <Projects />

      <Blog />

      <Skills />

      <Experience />

      <Footer />

      <BackToTopButton />
    </>
  );
}

export default App;
