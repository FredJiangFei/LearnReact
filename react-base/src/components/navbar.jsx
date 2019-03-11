import React from 'react';

// sfc Stateless Functionial Component
const NavBar = props => {
  console.log('NavBar - Render');
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="./">
        Navbar{' '}
        <span className="badge badge-pill badge-secondary">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
