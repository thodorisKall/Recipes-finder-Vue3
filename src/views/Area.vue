<script setup>
import { useRoute } from "vue-router"
import { ref, onMounted } from "vue"
import { getAreaRecipes } from "../services/services.js"

const areaRecipes = ref([])

const route = useRoute()
const nameArea = route.params.area

onMounted(async () => {
  try {
    areaRecipes.value = await getAreaRecipes(nameArea)
  } catch (e) {
    console.error(`Error getting recipes by Area: ${e.message}`)
  }
})
</script>

<template>
  <section class="type_container" v-if="areaRecipes">
    <div class="type_title recipe_view_title">
      <h2>{{ nameArea }} Recipes</h2>
    </div>
    <div class="recipes_desc">
      <router-link
        class="recipes_box"
        v-for="recipe in areaRecipes"
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
