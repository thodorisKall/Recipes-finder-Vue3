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
  <div>
    <h3>
      Recipes organized by primary and important ingredients, like oils, flours
      and herbs.
    </h3>
    <h2>Recipes by Ingredients</h2>
  </div>
  <div>
    <button v-for="(ingredient, index) in ingredients" :key="index">
      <p>{{ ingredient.strIngredient }}</p>
    </button>
  </div>
</template>
