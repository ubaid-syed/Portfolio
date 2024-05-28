import "./Home.css";
import Typewriter from "typewriter-effect";
import { Email, Phone } from "@material-ui/icons";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Home() {
  return (
    <section className="section home center">
      <h1>
        Hi, I am <span className="about__name">Syed Ubaid Rasool</span>
      </h1>

      <h2 className="typer">
        <Typewriter
          options={{
            strings: [
              "A Full Stack Web Developer",
              "A Sport person",
              "Curious to learn new things",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      </h2>

      <p id="des">
        Adaptable and responsible web developer capable of writing production
        ready code using HTML, CSS, JavaScript, React.Js on the front-end and
        NodeJs, Express.Js, and MongoDB on the back-end to build single-page
        applications.
      </p>

      <section id="social">
        <a
          href="https://github.com/ubaid-syed"
          target="_blank"
          aria-label="github"
          className="link link--icon"
        >
          {" "}
          <GitHubIcon />{" "}
        </a>

        <a
          href="https://www.linkedin.com/in/shah-g-75202b305/"
          target="_blank"
          aria-label="linkedin"
          className="link link--icon"
        >
          {" "}
          <LinkedInIcon />{" "}
        </a>

        <a
          href="mailto:ubaidsyed7770@gmail.com"
          aria-label="email"
          className="link link--icon"
        >
          {" "}
          <Email />{" "}
        </a>

        <a
          href="tel:+923264982168"
          aria-label="phone"
          className="link link--icon"
        >
          {" "}
          <Phone />{" "}
        </a>
      </section>

      <a
        href="https://drive.google.com/file/d/1tdGBAQ0iiMz2eZ1gxR-QYtTdBBvyCHJF/view?usp=drive_link"
        target="_blank"
        id="resumeButton"
      >
        <span type="button" className="btn btn--outline">
          {" "}
          Resume{" "}
        </span>
      </a>
    </section>
  );
}

export default Home;
