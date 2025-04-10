import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import recipes from '../data';

function HomePage() {
  const navigate = useNavigate();

  // Get user from localStorage
  const user = JSON.parse(localStorage.getItem('user'));

  // Redirect to login if not logged in
  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  // Return null until user is checked (to avoid rendering errors)
  if (!user) {
    return null; // or a loading spinner
  }

  return (
    <div>
      <h2>Welcome, {user.username}!</h2>

      {/* Logout Button */}
      <button onClick={handleLogout}>Logout</button>

      <h2>Home Page - Recipes</h2>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {recipes.map((recipe) => (
          <div key={recipe.id} style={{ border: '1px solid gray', padding: '10px', width: '200px' }}>
            <img src={recipe.image} alt={recipe.title} style={{ width: '100%' }} />
            <h3>{recipe.title}</h3>
            <p>Time: {recipe.cookingTime}</p>
            <p>Rating: ⭐ {recipe.rating}</p>
            <Link to={`/recipe/${recipe.id}`}>View Recipe</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
