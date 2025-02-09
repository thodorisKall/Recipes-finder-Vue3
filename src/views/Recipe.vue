<script setup>
import { useRoute } from "vue-router"
import { ref, onMounted } from "vue"
import { getSingleRecipe } from "../services/services.js"
import { Film, MousePointerClick } from "lucide-vue-next"

const recipeData = ref(null)

const route = useRoute()
const recipeId = route.params.id

onMounted(async () => {
  try {
    recipeData.value = await getSingleRecipe(recipeId)
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
  <div class="recipe_view" v-if="recipeData">
    <div class="recipe_view_title">
      <h2>{{ recipeData.strMeal }}</h2>
    </div>
    <div class="recipe_view_basics">
      <img :src="recipeData.strMealThumb" :alt="recipeData.strMeal" />
      <div class="recipe_view_attr">
        <div class="recipe_view_box">
          <h4>Category</h4>
          <p>{{ recipeData.strCategory }}</p>
        </div>
        <div class="recipe_view_box" id="recipe_view_area">
          <h4>Cuisines</h4>
          <router-link :to="`/recipes/${recipeData.strArea}`"
            >{{ recipeData.strArea }} <span><MousePointerClick /></span>
          </router-link>
        </div>
        <div class="recipe_view_box">
          <h4>Base Ingredients</h4>
          <p>{{ recipeData.strTags }}</p>
        </div>
      </div>
    </div>
    <div class="recipe_view_details">
      <div class="recipe_view_desc">
        <h3>Instructions</h3>
        <p>{{ recipeData.strInstructions }}</p>
      </div>
      <div class="recipe_view_items">
        <h3>Ingredients</h3>
        <ul>
          <li v-for="(item, index) in getIngredients()" :key="index">
            <input type="checkbox" class="item_check" />
            {{ item.measure }} {{ item.ingredient }}
          </li>
        </ul>
      </div>
    </div>
    <div class="recipe_view_video" v-if="recipeData.strYoutube">
      <h2><Film />{{ recipeData.strMeal }} Video</h2>
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
