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

export const greekRecipes = async () => {
  const response = await axios.get(`${API_URL}json/v1/1/filter.php?a=Greek`)
  return response.data.meals
}
