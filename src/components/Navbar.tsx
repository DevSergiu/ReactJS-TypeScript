import React from "react";

export const Navbar: React.FC = () => (
  <nav>
    <div className="nav-wrapper">
      <a href="/" className="brand-logo">
        TSX ♥
      </a>
      <ul className="right hide-on-med-and-down">
        <li>
          <a href="/">My tasks</a>
        </li>
        <li>
          <a href="/">Info</a>
        </li>
      </ul>
    </div>
  </nav>
);
