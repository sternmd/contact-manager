import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  const { branding } = props;

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">{branding}</a>
      </div>
      <ul className="navbar-nav mr-auto">
        <li>
          <a href="/" className="nav-link">Home</a>
        </li>
      </ul>
    </nav>
  );
};

Header.defaultProps = {
  branding: 'My App'
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

// inline styling
// const headingStyle = {
//   color: 'red',
//   fontSize: '2em'
// }

export default Header;
