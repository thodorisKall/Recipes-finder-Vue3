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
  <section class="type_container" v-if="recipesOf">
    <div class="type_title recipe_view_title">
      <h2>Type: {{ typeName }}</h2>
    </div>
    <div class="recipes_desc">
      <router-link
        class="recipes_box"
        v-for="recipe in recipesOf"
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
  </section>
  <section v-else>
    <h3>Loading.....</h3>
  </section>
</template>
