import AboutMe from "../../components/AboutMe/AboutMe";
import ContactForm from "../../components/ContactForm/ContactForm";
import HomeBanner from "../../components/HomeSection/HomeBanner";
import SkillCard from "../../components/Skills/SkillCard";
import Projects from "../Projects/Projects";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <Projects />
      <AboutMe />
      <SkillCard />
      <ContactForm />
    </>
  );
};

export default Home;
