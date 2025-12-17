import Hero from "./sections/Hero/Hero";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import HowIWork from "./sections/HowIWork/HowIWork";
import About from "./sections/About/About";
import Contact from "./sections/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app-bg">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <HowIWork />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
