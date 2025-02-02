import { createRouter, createWebHistory } from "vue-router"
import Home from "./views/Home.vue"
import Recipe from "./views/Recipe.vue"
import Category from "./views/Category.vue"
import Ingredient from "./views/Ingredient.vue"

const routes = [
  { path: "/", component: Home },
  { path: "/recipe/:id", component: Recipe },
  { path: "/category/:name", component: Category },
  { path: "/ingredient/:name", component: Ingredient },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
