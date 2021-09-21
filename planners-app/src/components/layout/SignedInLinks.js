import React from 'react';
import { NavLink } from 'react-router-dom';

const SignInLinks = () => {
  return (
    <ul className="right">
      <li><NavLink to="/create">New Project</NavLink></li>
      <li><NavLink to="/signout">Log Out</NavLink></li>
      <li><NavLink to="/profile" className="btn btn-floating red lighten-1">NN</NavLink></li>
    </ul>
  );
}
 
export default SignInLinks;