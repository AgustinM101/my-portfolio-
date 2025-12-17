import Hero from "./sections/Hero/Hero";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";

function App() {
  return (
    <div className="app-bg">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
