<script setup>
import { ref, onMounted } from "vue"
import { getAreaRecipes } from "../services/services.js"

const recipes = ref([])

onMounted(async () => {
  try {
    recipes.value = await getAreaRecipes("Greek")
  } catch (e) {
    console.error(`Error getting GreekRecipes ${e.message}`)
  }
})
</script>

<template>
  <div class="recipes" id="greek_recipes">
    <div class="recipes_titles">
      <h3>Browse through our Greek recipes</h3>
      <h2>Greek Recipes</h2>
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
