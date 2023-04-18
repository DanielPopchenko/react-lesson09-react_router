import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutView() {
  return (
    <div>
      <h1 className="heading">About</h1>
      <ul>
        <li>
          <Link to="/about/first">First</Link>
        </li>
        <li>
          <Link to="/about/second">Second</Link>
        </li>
      </ul>
    </div>
  );
}
