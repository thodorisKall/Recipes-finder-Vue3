<script setup>
import { useRoute } from "vue-router"
import { ref, onMounted } from "vue"
import { getSingleRecipe } from "../services/services.js"

const recipeData = ref(null)

const route = useRoute()
const recipeId = route.params.id

onMounted(async () => {
  try {
    recipeData.value = await getSingleRecipe(recipeId)
    console.log(recipeData.value)
  } catch (e) {
    console.error(`Error getting Single Recipe data: ${e.message}`)
  }
})

const getIngredients = () => {
  if (!recipeData.value) return []

  const ingredients = []
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipeData.value[`strIngredient${i}`]
    const measure = recipeData.value[`strMeasure${i}`]
    if (ingredient && ingredient.trim() !== "") {
      ingredients.push({ ingredient, measure })
    }
  }
  return ingredients
}

const getYoutubeEmbedUrl = (url) => {
  if (!url) return ""
  const videoId = url.split("v=")[1]
  return `https://www.youtube.com/embed/${videoId}`
}
</script>

<template>
  <div v-if="recipeData">
    <h2>{{ recipeData.strMeal }}</h2>
    <div>
      <img :src="recipeData.strMealThumb" :alt="recipeData.strMeal" />
      <div>
        <div>
          <h4>Category</h4>
          <p>{{ recipeData.strCategory }}</p>
        </div>
        <div>
          <h4>Cuisines</h4>
          <p>{{ recipeData.strArea }}</p>
        </div>
        <div>
          <h4>Base Ingredients</h4>
          <p>{{ recipeData.strTags }}</p>
        </div>
      </div>
    </div>
    <div>
      <h3>Instructions</h3>
      <p>{{ recipeData.strInstructions }}</p>
    </div>
    <div>
      <h3>Ingredients</h3>
      <ul>
        <li v-for="(item, index) in getIngredients()" :key="index">
          {{ item.measure }} {{ item.ingredient }}
        </li>
      </ul>
    </div>
    <div v-if="recipeData.strYoutube">
      <h2>Recipe Video</h2>
      <iframe
        width="600"
        height="340"
        :src="getYoutubeEmbedUrl(recipeData.strYoutube)"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  </div>

  <div v-else>
    <p>Loading...</p>
  </div>
</template>
