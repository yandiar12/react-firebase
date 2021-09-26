const initState = {
  authError: null
}

const authReducer = (state = initState, action) => {
  const { type, payload } = action

  switch (type) {
    case 'LOGIN_ERROR':
      console.log('Login Error : '+ payload);
      return {
        ...state,
        authError: 'Login Failed'
      }
    
    case 'LOGIN_SUCCESS':
      console.log('Login Success');
      return {
        ...state,
        authError: null
      }  
    
    default:
      return state;
  }
}

export default authReducer;