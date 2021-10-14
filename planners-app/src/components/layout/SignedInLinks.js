import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { signOut } from '../../store/actions/authActions';

const SignInLinks = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.firebase.profile);

  const handleLogout = () => {
    dispatch(signOut())
  }

  return (
    <ul className="right">
      <li><NavLink to="/create">New Project</NavLink></li>
      <li><NavLink to="#" onClick={handleLogout}>Log Out</NavLink></li>
      <li>
        <NavLink to="/profile" className="btn btn-floating red lighten-1">
          { profile.initials }
        </NavLink>
      </li>
    </ul>
  );
}
 
export default SignInLinks;