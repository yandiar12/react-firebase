import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from "react-redux-firebase";
import moment from 'moment';

const ProjectDetails = () => {
  const { id } = useParams();

  useFirestoreConnect({ collection: 'projects', doc: id });
  const projects = useSelector((state) => state.firestore.data.projects);
  const project = projects ? projects[id] : null;

  return (
    <div className="container section project-details">
      { project === null && <div className="container center">Loading...</div> }
      { project && <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">{ project.title }</span>
          <p>{ project.content }</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by { project.authorFirstName } { project.authorLastName }</div>
          <div>{ moment(project.createdAt.toDate()).calendar() }</div>
        </div>
        </div> 
      }
    </div>
  );
}
 
export default ProjectDetails;