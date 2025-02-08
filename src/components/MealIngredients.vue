<script setup>
import { ref, onMounted } from "vue"
import { getIngredients } from "../services/services.js"

const ingredients = ref([])

onMounted(async () => {
  try {
    ingredients.value = await getIngredients()
    console.log(ingredients.value)
  } catch (e) {
    console.error(`Error getting Ingredients API: ${e.message}`)
  }
})
</script>

<template>
  <div class="meal_ingredients">
    <div class="meal_ingredients_title">
      <h3>
        Recipes organized by primary and important ingredients, like oils,
        flours and herbs.
      </h3>
      <h2>Recipes by Ingredients</h2>
    </div>
    <div class="meal_ingredients_elements">
      <router-link
        class="meal_ingredients_box"
        v-for="(ingredient, index) in ingredients"
        :key="index"
        :to="`ingredients/${ingredient.strIngredient}`"
      >
        <p>{{ ingredient.strIngredient }}</p>
        <img src="" alt="" />
      </router-link>
    </div>
  </div>
</template>
