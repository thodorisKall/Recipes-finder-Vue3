<script setup>
import { useRoute } from "vue-router"
import { ref, onMounted } from "vue"
import { getRecipesByType } from "../services/services.js"

const recipesOf = ref(null)

const route = useRoute()
const typeName = route.params.name

onMounted(async () => {
  try {
    recipesOf.value = await getRecipesByType(typeName)
    console.log(recipesOf.value)
  } catch (e) {
    console.error(`Error getting recipes by Type: ${e.message}`)
  }
})
</script>

<template>
  <div v-if="recipesOf">
    <h2>Type: {{ typeName }}</h2>
    <div v-for="recipe in recipesOf" :key="recipe.idMeal">
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
