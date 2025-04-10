import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h2>Home Page - List of Recipes will show here</h2>
      <nav>
        <Link to="/login">Go to Login Page</Link><br />
        <Link to="/recipe/1">See Recipe 1</Link>
      </nav>
    </div>
  );
}

export default HomePage;
