import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SignInLinks from './SignedInLinks';
import SignOutLinks from './SignedOutLinks';

const Navbar = () => {
  const auth = useSelector((state) => state.firebase.auth);
  const links = auth.uid ? <SignInLinks /> : <SignOutLinks />
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo left">Planners App</Link>
        { links }
      </div>
    </nav>
  );
}
 
export default Navbar;