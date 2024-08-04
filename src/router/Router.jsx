import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Projects from "../pages/Projects/Projects";
import Home from "../pages/Home/Home";
import Footer from "../components/Footer/Footer";
import AnimatedCursor from "react-animated-cursor";
import SkillCard from "../components/Skills/SkillCard";
import AboutMe from "../components/AboutMe/AboutMe";
import App from "../App";

const Router = () => {
  return (
    <BrowserRouter>
      {/* <AnimatedCursor
        color="#fff"
        innerSize={20}
        outerSize={40}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        outerStyle={{
          background: "#ffffff",
          mixBlendMode: "exclusion",
        }}
        innerStyle={{
          backgroundColor: "#F94892",
        }}
      /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<SkillCard />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
