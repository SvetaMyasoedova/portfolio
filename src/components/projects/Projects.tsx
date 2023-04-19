import projectsStyles from "./projects.module.css";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data/project";

function Projects() {
  return (
    <div className={projectsStyles.main}>
      <p className={projectsStyles.header}> My Projects</p>
      {projects.map((project) => (
        <ProjectCard
          images={project.images}
          title={project.title}
          text={project.text}
          link={project.link}
          skills={project.skills}
          gitHub={project.gitHub}
        />
      ))}
    </div>
  );
}

export default Projects;
