<script setup>
import Nav from "./components/Nav.vue"
import Footer from "./components/Footer.vue"
</script>

<template>
  <div>
    <Nav />
    <router-view />
    <Footer />
  </div>
</template>
