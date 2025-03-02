import create from 'zustand'

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favorites: [],
  recommendations: [],

  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),

  deleteRecipe: (id) => set((state) => ({recipes: state.recipes.filter((recipe) => recipe.id !== id),})),

  updateRecipe: (id, updateRecipe) => set((state) => ({recipes: state.recipe.map((recipe) => recipe.id === id ? {...recipe, ...updateRecipe} : recipe),})),

  setRecipes: (recipes) => set({ recipes }),

  //Search and filtering actions
  setSearchTerm: (term) => set({searchTerm: term}),

  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())),
    })),

    //Favourite actions
    addFavorite: (recipeId) =>
      set((state) => ({favorites: [...state.favorites, recipeId]})),
    removeFavorite: (recipeId) =>
      set((state) => ({favorites: state.favorite.filter((id) => id !== recipeId),})),

    //Recommendations actions
    generateRecommendations: () =>
      set((stae) => {
        const recommended = state.recipes.filter(
          (recipe) => state.favorites.includes(recipe.id) && Math.random() > 0.5
        );
        return {recommendations: recommended};
      }),
}));

export default useRecipeStore;