function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-image">X</div>

      <div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
