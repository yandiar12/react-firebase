import ProjectList from '../projects/ProjectList';
import Notifications from './Notifications';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const { project: data } = useSelector((state) => state);
  
  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
          <ProjectList projects={data.projects} />
        </div>
        <div className="col s12 m5 offset-m1">
            <Notifications />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;