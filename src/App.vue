<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav class="h-full flex justify-evenly items-center">
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/works">My Works</RouterLink>
      </nav>
  </header>

  <RouterView />
  
  <footer>
    <p>Footer</p>
  </footer>
</template>