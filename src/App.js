import { useContext } from "react";
import { ThemeContext } from "./contexts/theme";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import MouseParticles from "react-mouse-particles";

import "./App.css";

const App = () => {
  const [{ themeName }] = useContext(ThemeContext);

  return (
    <div className={`${themeName} app`}>
      <Header />

      <main>
        <Home />
        <About />
        <Skills />
        <Projects />

        <Contact />
      </main>
      <ScrollToTop />
      <Footer />

      <MouseParticles
        g={3}
        num={9}
        color="random"
        cull="stats,image-wrapper"
        level={6}
      />
    </div>
  );
};

export default App;
