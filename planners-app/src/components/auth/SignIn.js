import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../../store/actions/authActions';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const dispatch = useDispatch();

  const authError = useSelector(state => state.auth.authError);

  const handleChange = (e) => {
    switch (e.target.id) {
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
          setPassword(e.target.value);
          break;
      default:
        break;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let credentials = {
      email: email,
      password: password
    }

    dispatch(signIn(credentials));
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">
          Sign In
        </h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" onChange={handleChange} />
        </div>
        <div className="input-field">
          <button className="btn red lighten-1 z-depth-0">Login</button>
          <div className="red-text center">
            { authError ? <p> { authError } </p> : null }
          </div>
        </div>
      </form>
    </div>
  );
}
 
export default SignIn;