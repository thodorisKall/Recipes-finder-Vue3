<template>
  <div class="meal_type">
    <div class="meal_type_title">
      <h3>Browse Through Our Most Popular Recipe</h3>
      <h2>Browse by Recipe Type</h2>
    </div>
    <div class="meal_type_types">
      <router-link
        class="meal_type_box"
        v-for="(type, index) in mealTypes"
        :key="index"
        :to="`/category/${type.strCategory}`"
      >
        <p>{{ type.strCategory }}</p>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { getMealTypes } from "../services/services.js"

const mealTypes = ref([])

onMounted(async () => {
  try {
    mealTypes.value = await getMealTypes()
    console.log("Fetched meal types:", mealTypes.value)
  } catch (error) {
    console.error("Error fetching meal types:", error)
  }
})
</script>
