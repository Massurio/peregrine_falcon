import React from 'react';
import { Link } from 'react-router-dom';

export default function navbar() {
  return (
    <div class="navbar">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/signup">Signup</Link>
      </li>
      <li>
        <Link to="/logout">Logout</Link>
      </li>
      <li>
        <Link to="/UserPage">User Page</Link>
      </li>
      <li>
        <Link to="/ContactUs">Contact Us</Link>
      </li>
      <li>
        <Link to="/LocationPage">Location Page</Link>
      </li>
      <li>
        <Link to="/stagepage">Stage Page</Link>
      </li>
    </div>
  );
}
