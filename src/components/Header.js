import React from 'react';
import colors from "../colors";
// import logo from './minnmax-logo.png';

const Header = () => {
  return (
    <div className='header' style={headerStyle}>
      {/* <img src={logo} alt="MinnMax logo" style={logoStyle} /> */}
      <h1 style={titleStyle}>MinnMax</h1>
      <div style={linksStyle}>
        <a href="#" style={linkStyle}>Videos</a>
        <a href="#" style={linkStyle}>Support</a>
        <a href="#" style={linkStyle}>Podcasts</a>
        <a href="#" style={linkStyle}>Schedule</a>
        <a href="#" style={linkStyle}>Other</a>
      </div>
    </div>
  );
}

const headerStyle = {
  backgroundColor: colors.minnMaxOrange,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem',
  color: 'black',
};

// const logoStyle = {
//   height: '60px',
// };

const titleStyle = {
  margin: '0',
};

const linksStyle = {
  display: 'flex',
};

const linkStyle = {
  color: 'black',
  textDecoration: 'none',
  margin: '0 1rem',
};

export default Header;
