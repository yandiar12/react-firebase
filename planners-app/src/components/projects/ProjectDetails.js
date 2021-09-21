import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
  const { id } = useParams();

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title { id }</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa qui est voluptatum dolorem autem non odio ea repellendus vitae rerum corrupti, consequatur corporis nihil in architecto obcaecati. Ipsam, magni temporibus?</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by The Net Ninja</div>
          <div>2nd September, 2am</div>
        </div>
      </div>
    </div>
  );
}
 
export default ProjectDetails;