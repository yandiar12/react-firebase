import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from "react-redux-firebase";

const ProjectDetails = () => {
  const { id } = useParams();

  useFirestoreConnect({ collection: 'projects' });
  const projects = useSelector((state) => state.firestore.data.projects)
  const project = projects ? projects[id] : null

  return (
    <div className="container section project-details">
      { project && <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">{ project.title }</span>
          <p>{ project.content }</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by { project.authorFirstName } { project.authorLastName }</div>
          <div>2nd September, 2am</div>
        </div>
        </div> 
      }
    </div>
  );
}
 
export default ProjectDetails;