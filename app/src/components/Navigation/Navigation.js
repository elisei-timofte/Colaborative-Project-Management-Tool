import React from 'react';

import './navigation.scss';

const Navigation = ({ links }) => (
  <div className="navigation">
    <ul>
      {links.map(link => (
        <li key={link.to}>
          <a href={link.to}>{link.label}</a>
        </li>
      ))}
    </ul>
  </div>
);

export default Navigation;
