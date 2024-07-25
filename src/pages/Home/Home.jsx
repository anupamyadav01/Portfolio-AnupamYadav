import AnimatedCursor from "react-animated-cursor";
import Navbar from "../../components/Navbar/Navbar";
import HomeBanner from "../../components/HomeSection/HomeBanner";
import ProjectCard from "../../components/MyProjects/ProjectCard";
import AboutMe from "../../components/AboutMe/AboutMe";
import SkillCard from "../../components/Skills/SkillCard";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <div>
        {/* <Navbar /> */}
        <HomeBanner id="home" />
        {/* <ProjectCard
          id="project"
          className="odd"
          projectTitle="Countries Finder: search your country here..."
          projectDesc="A one-stop solution for pet data management, automated vaccinations, QR-based lost pet recovery, and organizing pet playdates."
          projectLink="https://github.com/anupamyadav01/rest-countries-api-with-color-theme-switcher"
          deployedProjectLink="https://anupamyadav01.github.io/rest-countries-api-with-color-theme-switcher/index.html"
          projectImg={restCountry}
        />
        <ProjectCard
          projectTitle="Resume Builder: build your resume"
          projectDesc="React JS provided me the flexibility needed to create an interactive card with a glass-like effect, which adds a sense of depth and dimension to the user interface"
          projectLink="https://github.com/anupamyadav01/resume-builder"
          deployedProjectLink="https://anupamyadav01.github.io/resume-builder/index.html"
          projectImg={resumeBuilder}
        />
        <ProjectCard
          className="odd"
          projectTitle="Multi Shop: Shopping possible anytime, anywhere"
          projectDesc="An approach to target and heal specific health conditions by transforming the living room into a yoga studio"
          projectLink="https://github.com/anupamyadav01/learning_reactjs/tree/master/homeworks/multi-shop"
          deployedProjectLink=""
          projectImg={multiShop}
        /> */}
        <AboutMe id="about" />
        <SkillCard id="skills" />
        <ContactForm id="contact" />
      </div>
    </>
  );
};

export default Home;
