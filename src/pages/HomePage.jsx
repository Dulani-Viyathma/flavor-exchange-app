import React from 'react';
import { Link } from 'react-router-dom';
import recipes from '../data';

function HomePage() {
  return (
    <div>
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
