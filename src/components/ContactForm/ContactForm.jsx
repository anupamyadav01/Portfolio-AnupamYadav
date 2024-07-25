import React, { useRef } from "react";
import "./ContactFormStyle.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import cartoon from "../../images/cartoon-compressed.jpg";

export default function ContactForm({ id }) {
  const form = useRef();

  return (
    <div className="contact-window" id={id}>
      <h1>Let's Get in Touch.</h1>
      <p>Discuss a project or just want to say Hi? My inbox is open for all.</p>
      <div className="contact-container">
        <img
          src={cartoon}
          alt="Deepa Jha"
          className="contact-wrapper-left"
        ></img>
        <form ref={form} className="contact-wrapper-right">
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Full Name"
            required
          />
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email ID"
            required
          />
          <textarea
            id="message"
            name="message"
            rows="5"
            column="15"
            placeholder="Share your thoughts and insights here; your feedback means a lot."
            required
          />
          <button className="btn" id="submitBtn" type="submit" value="Send">
            Send Message
          </button>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
}
