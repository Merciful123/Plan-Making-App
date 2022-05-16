const ProjectSummary = ({ project }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>Posted By HoneyBees</p>
        <p className="text-grey">15th May, 10pm</p>
      </div>
    </div>
  );
};
export default ProjectSummary;
