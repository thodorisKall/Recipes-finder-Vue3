<script setup>
import MealTypes from "../components/MealTypes.vue"
import MealIngredients from "../components/MealIngredients.vue"
import Recommended from "../components/RecommendedMeals.vue"
import GreekMeals from "../components/GreekMeals.vue"
import Footer from "../components/Footer.vue"
</script>

<template>
  <div>
    <h1>Hello World</h1>
    <h1>Hello Vue Router</h1>
    <MealTypes />
    <MealIngredients />
    <Recommended />
    <GreekMeals />

    <router-view />
  </div>
</template>
