import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/actions/authActions';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.firebase.auth)
  const authError = useSelector(state => state.auth.authError);

  if (auth.uid) return <Redirect to="/" />

  const handleChange = (e) => {
    switch (e.target.id) {
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      case 'firstname':
        setFirstName(e.target.value);
        break;
      case 'lastname':
        setLastName(e.target.value);
        break;      
      default:
        break;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let newUser = {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName
    }

    dispatch(signUp(newUser));
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">
          Sign Up
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
          <label htmlFor="firstname">First Name</label>
          <input type="text" name="firstname" id="firstname" onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="lastname">Last Name</label>
          <input type="text" name="lastname" id="lastname" onChange={handleChange} />
        </div>
        <div className="input-field">
          <button className="btn red lighten-1 z-depth-0">Sign Up</button>
          <div className="red-text center">
            { authError ? <p> { authError } </p> : null }
          </div>
        </div>
      </form>
    </div>
  );
}
 
export default SignUp;