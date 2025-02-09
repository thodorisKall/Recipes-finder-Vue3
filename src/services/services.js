import axios from "axios"

const API_URL = "https://www.themealdb.com/api/"

export const getMealTypes = async () => {
  const response = await axios.get(`${API_URL}json/v1/1/list.php?c=list`)
  return response.data.meals.slice(0, 10)
}

export const getIngredients = async () => {
  const response = await axios.get(`${API_URL}json/v1/1/list.php?i=list`)
  return response.data.meals.slice(0, 10)
}

export const getAreaRecipes = async (areaName) => {
  const response = await axios.get(
    `${API_URL}json/v1/1/filter.php?a=${areaName}`
  )
  return response.data.meals
}

export const getSingleRecipe = async (recipeId) => {
  const response = await axios.get(
    `${API_URL}json/v1/1/lookup.php?i=${recipeId}`
  )
  return response.data.meals[0]
}

export const getRecipesByType = async (typeName) => {
  const response = await axios.get(
    `${API_URL}json/v1/1/filter.php?c=${typeName}`
  )
  return response.data.meals
}

export const getRecipesByIngredient = async (ingredient) => {
  try {
    const response = await axios.get(
      `${API_URL}json/v1/1/filter.php?i=${ingredient}`
    )
    return response.data.meals
  } catch (error) {
    console.error("Error fetching recipes:", error.message)
  }
}
