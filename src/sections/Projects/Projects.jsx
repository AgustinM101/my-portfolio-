import "./Projects.css";
import { projects } from "../../data/projects";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-header">
        <h2>Selected Projects</h2>
        <p>Some of the projects I've worked on recently.</p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
