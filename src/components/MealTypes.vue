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
        <span><CookingPot /> </span>
        <p>{{ type.strCategory }}</p>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { getMealTypes } from "../services/services.js"
import { CookingPot } from "lucide-vue-next"

const mealTypes = ref([])

onMounted(async () => {
  try {
    mealTypes.value = await getMealTypes()
  } catch (error) {
    console.error("Error fetching meal types:", error)
  }
})
</script>
