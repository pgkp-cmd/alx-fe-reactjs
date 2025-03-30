import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = data.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) return <div className="text-center mt-8">Recipe not found!</div>;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded-lg" />
      <h1 className="text-3xl font-bold mt-6 mb-4">{recipe.title}</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-3">Ingredients</h2>
        <ul className="list-disc list-inside mb-6">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="text-gray-700">{ingredient}</li>
          ))}
        </ul>
        <h2 className="text-xl font-semibold mb-3">Steps</h2>
        <ol className="list-decimal list-inside">
          {recipe.steps.map((step, index) => (
            <li key={index} className="text-gray-700 mb-2">{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;