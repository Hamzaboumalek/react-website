import React, { useState } from 'react';
import './styles.css';
import React, { Component } from 'react';
import Dropdown from 'react-dropdown';

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [estimerOpen, setEstimerOpen] = useState(false);

  return (
    <nav>
      <div className="logo">
        <img src="path/to/logo.png" alt="Logo" />
      </div>
      <ul>
        <li>
          <a href="#" onClick={() => setDropdownOpen(!dropdownOpen)}>Achete</a>
          {dropdownOpen && (
            <ul>
              <li><a href="#">Option 1</a></li>
              <li><a href="#">Option 2</a></li>
              <li><a href="#">Option 3</a></li>
            </ul>
          )}
        </li>
        <li><a href="#">Louer</a></li>
        <li>
        <li>
          <a href="#" onClick={() => setDropdownOpen(!dropdownOpen)}>Estimer</a>
          {dropdownOpen && (
            <ul>
              <li><a href="#">Option 1</a></li>
              <li><a href="#">Option 2</a></li>
              <li><a href="#">Option 3</a></li>
            </ul>
          )}
        </li>
        <li><a href="#">Prix immobilliers</a></li>
        <li>
        <a href="#" onClick={() => setDropdownOpen(!dropdownOpen)}>Crédit</a>
          {dropdownOpen && (
            <ul>
              <li><a href="#">Option 1</a></li>
              <li><a href="#">Option 2</a></li>
              <li><a href="#">Option 3</a></li>
            </ul>
          )}
        </li>
        </li>
        <li><a href="#">Agences</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
