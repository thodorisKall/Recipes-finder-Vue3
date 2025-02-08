<script setup>
import { useRoute } from "vue-router"
import { ref, onMounted } from "vue"
import { getRecipesByIngredient } from "../services/services.js"

const recipesWithIngredient = ref(null)

const route = useRoute()
const ingredientName = route.params.name

onMounted(async () => {
  recipesWithIngredient.value = await getRecipesByIngredient(ingredientName)
})
</script>

<template>
  <section class="type_container" v-if="recipesWithIngredient">
    <div class="type_title">
      <h2>Ingredient: {{ ingredientName }}</h2>
    </div>
    <div class="recipes_desc">
      <router-link
        class="recipes_box"
        v-for="recipe in recipesWithIngredient"
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
