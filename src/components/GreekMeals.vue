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
    <router-link
      v-for="recipe in recipes"
      :key="recipe.idMeal"
      :to="`/recipe/${recipe.idMeal}`"
    >
      <p>{{ recipe.strMeal }}</p>
    </router-link>
  </div>
</template>
