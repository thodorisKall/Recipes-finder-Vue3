<script setup>
import MealTypes from "../components/MealTypes.vue"
import MealIngredients from "../components/MealIngredients.vue"
import Recommended from "../components/RecommendedMeals.vue"
import GreekMeals from "../components/GreekMeals.vue"
import Footer from "../components/Footer.vue"
</script>

<template>
  <div>
    <MealTypes />
    <GreekMeals />
    <MealIngredients />
    <Recommended />

    <router-view />
  </div>
</template>
