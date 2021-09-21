import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProject } from '../../store/actions/projectAction';

const CreateProject = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  // const [project, setProject] = useState({});

  const dispatch = useDispatch();

  const handleChange = (e) => {
    switch (e.target.id) {
      case 'title':
        setTitle(e.target.value);
        break;
      case 'content':
        setContent(e.target.value);
        break;
      default:
        break;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    var project = {
      title: title,
      content: content
    }

    dispatch(createProject(project));
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">
          Create Project
        </h5>
        <div className="input-field">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="content">Project Content</label>
          <textarea id="content" className="materialize-textarea" onChange={handleChange}></textarea>
        </div>
        <div className="input-field">
          <button className="btn red lighten-1 z-depth-0">Create</button>
        </div>
      </form>
    </div>
  );
}
 
export default CreateProject;