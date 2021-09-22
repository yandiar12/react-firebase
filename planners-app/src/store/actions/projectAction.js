export const createProject = (project) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    firestore.collection('/projects').add({
      ...project,
      authorFirstName: 'Andri',
      authorLastName: 'Kebo',
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_PROJECT', payload: project });
    }).catch((err) => {
      dispatch({ type: 'CREATE_PROJECT_ERROR', payload: err });
    });
    
  }
}