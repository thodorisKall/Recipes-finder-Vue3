<script setup>
import { recipes } from "../data/recipes.js"
</script>

<template>
  <div class="recipes" id="recommended">
    <div class="recipes_titles">
      <h3>Explore this collection of our all-time best dinner recipes</h3>
      <h2>Recommended Recipes</h2>
    </div>
    <div class="recipes_desc">
      <router-link
        class="recipes_box"
        v-for="recipe in recipes"
        :key="recipe.idMeal"
        :to="`/recipe/${recipe.idMeal}`"
        :style="{
          backgroundImage: `url(${recipe.strMealThumb})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }"
      >
        <p>{{ recipe.strMeal }}</p>
      </router-link>
    </div>
  </div>
</template>
