import "./Contact.css";
import { FaLinkedin, FaPhone } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <section className="section contact center" id="contact">
      <h2 className="section__title ">
        GET IN <span className="about_contact">TOUCH</span>{" "}
      </h2>

      <div id="cont">
        <a
          href="https://www.linkedin.com/in/shah-g-75202b305/"
          target="_blank"
          aria-label="linkedin"
          className="link link--icon"
        >
          {" "}
          <FaLinkedin size={60} />{" "}
        </a>
        <a
          href="https://github.com/ubaid-syed"
          target="_blank"
          aria-label="github"
          className="link link--icon"
        >
          {" "}
          <BsGithub size={60} />{" "}
        </a>

        <a
          href="mailto:ubaidsyed7770@gmail.com"
          aria-label="email"
          className="link link--icon"
        >
          {" "}
          <MdEmail size={60} />{" "}
        </a>

        <a
          href="tel:+923264982168"
          aria-label="phone"
          className="link link--icon"
        >
          {" "}
          <FaPhone size={60} />{" "}
        </a>
      </div>
    </section>
  );
}

export default Contact;
