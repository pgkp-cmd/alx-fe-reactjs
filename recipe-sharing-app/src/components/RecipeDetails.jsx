 import React from 'react';
 import {useRecipeStore} from './recipeStore';
 import DeleteRecipeButton from './DeleteRecipeButton';
 import EditRecipeForm from './EditRecipeForm'
 
 // RecipeDetails component

 const RecipeDetails = ({ recipeId }) => {
   const recipe = useRecipeStore(state =>
     state.recipes.find(recipe => recipe.id === recipeId)
   );

   if (!recipe) return <p>Recipe not found!</p>;

   return (
     <div>
       <h1>{recipe.title}</h1>
       <p>{recipe.description}</p>
       {/* Render EditRecipeForm and DeleteRecipeButton here */}
       <EditRecipeForm recipe={recipe} />
       <DeleteRecipeButton recipeId={recipe} />
     </div>
   );
 };

 export default RecipeDetails;