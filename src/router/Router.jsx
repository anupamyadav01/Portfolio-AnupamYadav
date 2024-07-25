import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Projects from "../pages/Projects/Projects";
import Home from "../pages/Home/Home";
import Footer from "../components/Footer/Footer";
import AnimatedCursor from "react-animated-cursor";

const Router = () => {
  return (
    <BrowserRouter>
      <AnimatedCursor
        color="#fff"
        // innerSize={10}
        // outerSize={40}
        innerScale={1}
        outerScale={1.4}
        outerAlpha={0}
        outerStyle={{
          background: "#ffffff",
          mixBlendMode: "exclusion",
        }}
        innerStyle={{
          backgroundColor: "#F94892",
        }}
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
