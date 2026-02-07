import ProjectCard from "./ProjectCard";

function ProjectList({ projects }) {
  return (
    <section className="project-list">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
}

export default ProjectList;
