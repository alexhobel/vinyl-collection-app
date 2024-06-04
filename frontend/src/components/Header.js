import React from 'react';

function Header() {
  return (
    <header className="header">
      <nav className="menu">
        <ul>
          <li><a href="#">Show Collection</a></li>
          <li><a href="#">Menu2</a></li>
          <li><a href="#">Menu3</a></li>
          <li><a href="#">Menu4</a></li>
        </ul>
      </nav>
      <h1 className="title">Vinyl Collection</h1>
    </header>
  );
}

export default Header;