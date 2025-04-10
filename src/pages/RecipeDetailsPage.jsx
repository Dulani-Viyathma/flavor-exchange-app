import React from 'react';
import { useParams } from 'react-router-dom';
import recipes from '../data';

function RecipeDetailsPage() {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return <h2>Recipe not found 😢</h2>;
  }

  return (
    <div>
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} style={{ width: '300px' }} />
      <p><strong>Cooking Time:</strong> {recipe.cookingTime}</p>
      <p><strong>Rating:</strong> ⭐ {recipe.rating}</p>
      <p><strong>Ingredients:</strong> Coming soon...</p>
      <p><strong>Instructions:</strong> Coming soon...</p>
    </div>
  );
}

export default RecipeDetailsPage;
