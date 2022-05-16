import { useParams } from "react-router-dom";
const ProjectDetails = (props) => {
  const { id } = useParams();
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            commodi blanditiis illo modi nostrum dolorem nesciunt accusantium
            voluptatibus voluptates facilis iure dignissimos sed harum, rem,
            placeat reiciendis cupiditate voluptatem, animi reprehenderit ipsum
            quasi veniam totam. Aperiam fugiat, ipsam, magni provident minus
            laboriosam, non officiis rerum dolor est repellat quod neque!
          </p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
          <div>Posted By Team Arrahman</div>
          <div>15th May, 10am</div>
        </div>
      </div>
    </div>
  );
};
export default ProjectDetails;
