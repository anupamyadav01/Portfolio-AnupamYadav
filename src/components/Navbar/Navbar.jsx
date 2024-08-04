import { useState } from "react";
import "./NavbarStyle.css";
// import { Link } from "react-scroll";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const handleCLick = () => setClick(!click);

  return (
    <nav className="header">
      <div className="logo">
        <Link activeClass="active" to="/">
          <div className="logo-img">
            <span className="blink">&lt;</span>
            <span>&#47;</span>ay<span className="blink">&gt;</span>
          </div>
        </Link>
      </div>
      <div
        className={click ? "nav-menu active" : "nav-menu"}
        onClick={handleCLick}
      >
        <Link
          className="navLink"
          to="/projects"
          onClick={() => navigate("/projects")}
        >
          Projects
        </Link>
        <Link className="navLink" to="/about">
          About
        </Link>
        <Link className="navLink" to="/skills">
          Skills
        </Link>
        <Link className="navLink" to="/contact">
          Contact
        </Link>
      </div>
      <div className={click ? "social-links active" : "social-links"}>
        <a href="https://www.linkedin.com/in/anupamyadav01/" target="_blank">
          <FaLinkedin
            className="social"
            size={25}
            style={{ marginRight: "2rem" }}
          />
        </a>
        <a
          href="https://github.com/anupamyadav01"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub
            className="social"
            size={25}
            style={{ marginRight: "2rem" }}
          />
        </a>
        <a
          href="https://www.instagram.com/anupamyadav01/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram
            className="social"
            size={25}
            style={{ marginRight: "2rem" }}
          />
        </a>
      </div>
      <div className="hamburger" onClick={handleCLick}>
        {click ? (
          <FaTimes className="bars" size={25} />
        ) : (
          <FaBars className="bars" size={25} style={{ color: "#fff" }} />
        )}
      </div>
    </nav>
  );
}
