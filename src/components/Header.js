import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='header'>
      <h1 className="title">MinnMax</h1>
      <button className="menu-toggle" onClick={toggleMenu}>{menuOpen ? 'Close' : 'Menu'}</button>
      {menuOpen && (
        <div className="dropdown">
          <a href="#" className="link">Videos</a>
          <a href="#" className="link">Support</a>
          <a href="#" className="link">Podcasts</a>
          <a href="#" className="link">Schedule</a>
          <a href="#" className="link">Other</a>
        </div>
      )}
    </div>
  );
};

export default Header;
