import { FaReact, FaNode } from "react-icons/fa";
import { SiCss3, SiHtml5, SiMongodb, SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
//import assets
import Rpreview1 from "../assets/2.jpeg";
import Rpreview2 from "../assets/1.jpeg";
import Rpreview3 from "../assets/5.jpeg";

import Tpreview1 from "../assets/3.jpeg";
import Tpreview2 from "../assets/4.jpeg";
import Tpreview3 from "../assets/6.jpeg";

import Epreview1 from "../assets/9.jpeg";
import Epreview2 from "../assets/10.jpeg";
import Epreview3 from "../assets/8.jpeg";

import "../ProjectContainer/ProjectContainer.css";
import "./Projects.css";

function Projects() {
  return (
    <section id="projects" className="section projects">
      <h2 className="section__title about_project">Projects</h2>

      {/* <-------------------------------------------------1 start-------------------------------------------> */}

      <div className="project" id="project">
        <div>
          <Splide
            options={{ rewind: true, gap: "1rem", heightRatio: 0.53 }}
            aria-label="React Splide Example"
          >
            <SplideSlide>
              <img src={Rpreview1} alt="Image 1" />
            </SplideSlide>
            <SplideSlide>
              <img src={Rpreview2} alt="Image 2" />
            </SplideSlide>

            <SplideSlide>
              <img src={Rpreview3} alt="Image 2" />
            </SplideSlide>
          </Splide>
        </div>

        <div>
          <h3 className="about_project">Travigo App</h3>

          <p className="project__description">
            The Travigo App is a Web application focused on providing a seamless
            booking experience for World Tours. It allows users to easily
            reserve tickets, check availability, and access essential
            information about the place, ensuring a convenient stay.
          </p>

          <ul className="project__stack">
            <li className="project__stack-item" id="stacks">
              <SiHtml5 size={40} />
              <IoLogoJavascript size={40} />
              <SiCss3 size={40} />
              <SiTailwindcss size={40} />
              <FaReact size={50} />
            </li>
          </ul>

          <div id="b">
            <a
              href="https://travel-agency-one-silk.vercel.app/"
              target="_blank"
            >
              <span type="button" className="btn btn--outline">
                {" "}
                Watch Live{" "}
              </span>
            </a>

            <a
              href="https://github.com/ubaid-syed/Travel-Agency"
              target="_blank"
            >
              <span type="button" className="btn btn--outline">
                {" "}
                View Code{" "}
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* <-------------------------------------------------1 end-------------------------------------------> */}

      {/* <-------------------------------------------------2 start-------------------------------------------> */}

      <div className="project" id="project">
        <div>
          <Splide
            options={{ rewind: true, gap: "1rem", heightRatio: 0.53 }}
            aria-label="React Splide Example"
          >
            <SplideSlide>
              <img src={Tpreview1} alt="Image 1" />
            </SplideSlide>
            <SplideSlide>
              <img src={Tpreview2} alt="Image 2" />
            </SplideSlide>

            <SplideSlide>
              <img src={Tpreview3} alt="Image 2" />
            </SplideSlide>
          </Splide>
        </div>

        <div>
          <h3 className="about_project">E-commerce App</h3>

          <p className="project__description">
            In our ecommerce app, we've streamlined the shopping experience with
            powerful filtering options. From categories to price ranges, brands,
            sizes, and more, users can effortlessly refine their searches to
            discover products that match their specific preferences and needs.
            With intuitive filtering, finding the perfect item is just a few
            taps away.
          </p>

          <ul className="project__stack">
            <li className="project__stack-item" id="stacks">
              <SiHtml5 size={40} />
              <IoLogoJavascript size={40} />
              <SiCss3 size={40} />
              <FaReact size={40} />
              <FaNode size={40} />
              <SiMongodb size={40} />
            </li>
          </ul>

          <div id="b">
            <a href="https://brain-ecommerce-73su.vercel.app/" target="_blank">
              <span type="button" className="btn btn--outline">
                {" "}
                Watch Live{" "}
              </span>
            </a>

            <a
              href="https://github.com/ubaid-syed/Mern-E_commerce"
              target="_blank"
            >
              <span type="button" className="btn btn--outline">
                {" "}
                View Code{" "}
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* <-------------------------------------------------2 end-------------------------------------------> */}

      {/* <-------------------------------------------------3 start-------------------------------------------> */}

      <div className="project" id="project">
        <div>
          <Splide
            options={{ rewind: true, gap: "1rem", heightRatio: 0.53 }}
            aria-label="React Splide Example"
          >
            <SplideSlide>
              <img src={Epreview1} alt="Image 1" />
            </SplideSlide>
            <SplideSlide>
              <img src={Epreview2} alt="Image 2" />
            </SplideSlide>

            <SplideSlide>
              <img src={Epreview3} alt="Image 2" />
            </SplideSlide>
          </Splide>
        </div>

        <div>
          <h3 className="about_project">Fitness-club App</h3>

          <p className="project__description">
            Welcome to our fitness haven, where we inspire and empower
            individuals on their wellness journey. Dive into a world of expertly
            curated content, ranging from workout routines and nutrition tips to
            mindfulness practices and motivational stories. Our platform is a
            one-stop destination for fitness enthusiasts of all levels, offering
            tailored guidance and support to help you achieve your health and
            fitness goals. Join our vibrant community and embark on a
            transformative experience towards a healthier, happier you.
          </p>

          <ul className="project__stack">
            <li className="project__stack-item" id="stacks">
              <SiHtml5 size={40} />
              <IoLogoJavascript size={40} />
              <SiCss3 size={40} />
              <FaReact size={40} />
            </li>
          </ul>

          <div id="b">
            <a href="https://fit-club-starter.netlify.app/" target="_blank">
              <span type="button" className="btn btn--outline">
                {" "}
                Watch Live{" "}
              </span>
            </a>

            <a
              href="https://github.com/ubaid-syed/Fit-Club-Starter"
              target="_blank"
            >
              <span type="button" className="btn btn--outline">
                {" "}
                View Code{" "}
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* <-------------------------------------------------3 end-------------------------------------------> */}
    </section>
  );
}

export default Projects;
