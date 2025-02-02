<script setup>
import { useRoute } from "vue-router"
import { ref, onMounted } from "vue"
import { getRecipesByIngredient } from "../services/services.js"

const recipesWithIngredient = ref(null)

const route = useRoute()
const ingredientName = route.params.name

onMounted(async () => {
  console.log(route)
  try {
    recipesWithIngredient.value = await getRecipesByIngredient(ingredientName)
  } catch (e) {
    console.error(`Error getting recipes by Ingredient: ${e.message}`)
  }
})
</script>

<template>
  <div v-if="recipesWithIngredient">
    <h2>Type: {{ ingredientName }}</h2>
    <div v-for="recipe in recipesWithIngredient" :key="recipe.idMeal">
      <img :src="recipe.strMealThumb" :alt="recipe.strMeal" />
      <div>
        <p>{{ recipe.idMeal }}</p>
        <button></button>
      </div>
      <div>
        <h3>{{ recipe.strMeal }}</h3>
        <p></p>
        <h4></h4>
      </div>
    </div>
  </div>
  <div v-else>
    <h3>Loading.....</h3>
  </div>
</template>
