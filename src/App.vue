<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav class="container">
        <a class="underline-wave" href="#competences">Compétences</a>
        <a class="underline-wave" href="#realisations">Réalisation</a>
        <a class="underline-wave" href="#moi">Qui suis-je ?</a>
        <a class="underline-wave" href="#contact">Contact</a>
        <!-- <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/works">My Works</RouterLink> -->
      </nav>
  </header>

  <RouterView />
  
  <!-- <footer>
    <p>Footer</p>
  </footer> -->
</template>