import React from 'react';
import { Link } from 'react-router-dom';

const nav = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/posts">Posts</Link></li>
        <li><Link to="/outra-qualquer">Outra página qualquer</Link></li>
      </ul>
    </nav>
  );
}

export default nav;