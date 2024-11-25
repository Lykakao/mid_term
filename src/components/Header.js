import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Anonime</h1>
      <nav>
        <a href="#">Home</a>
        <a href="#">List anime</a>
      </nav>
      <input className="search-bar" placeholder="Search anime or movie" type="text" />
    </header>
  );
};

export default Header;