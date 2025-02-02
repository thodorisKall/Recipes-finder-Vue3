<script setup>
import { recipes } from "../data/recipes.js"
</script>

<template>
  <div>
    <div>
      <h3>Explore this collection of our all-time best dinner recipes</h3>
      <h2>Recommended Recipes</h2>
    </div>
    <div v-for="recipe in recipes" :key="recipe.idMeal">
      <router-link :to="`/recipe/${recipe.idMeal}`">
        <p>{{ recipe.strMeal }}</p>
      </router-link>
    </div>
  </div>
</template>
