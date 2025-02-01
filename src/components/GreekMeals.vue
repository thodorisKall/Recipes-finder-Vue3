<script setup>
import { ref, onMounted } from "vue"
import { greekRecipes } from "../services/services.js"

const recipes = ref([])

onMounted(async () => {
  try {
    recipes.value = await greekRecipes()
  } catch (e) {
    console.error(`Error getting GreekRecipes ${e.message}`)
  }
})
</script>

<template>
  <div>
    <h3>Browse through our Greek recipes</h3>
    <h2>Greek Recipes</h2>
  </div>
  <div>
    <button v-for="recipe in recipes" :key="recipe.idMeal">
      <p>{{ recipe.strMeal }}</p>
    </button>
  </div>
</template>
