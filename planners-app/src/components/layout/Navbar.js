import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SignInLinks from './SignedInLinks';
import SignOutLinks from './SignedOutLinks';
// import { useFirebaseConnect } from "react-redux-firebase";

const Navbar = () => {

  const isLoggedIn = useSelector((state) => state.firebase.auth);
  console.log(isLoggedIn);

  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo left">Planners App</Link>
        <SignInLinks />
        <SignOutLinks />
      </div>
    </nav>
  );
}
 
export default Navbar;