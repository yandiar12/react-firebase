const initState = {}

const projectReducer = (state = initState, action) => {
  const { type, payload } = action

  switch (type) {
    case 'CREATE_PROJECT':
      console.log('Created Project. ', payload);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('Created Project error. ', payload);
      return state;
    default:
      return state;
  }
}

export default projectReducer;