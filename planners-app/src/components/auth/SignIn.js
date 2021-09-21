import { useState } from 'react';
const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
    console.log(email);
    console.log(password);
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
        </div>
      </form>
    </div>
  );
}
 
export default SignIn;