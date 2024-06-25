<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="container desk">
      <a class="underline-wave" href="#competences">Compétences</a>
      <a class="underline-wave" href="#realisations">Réalisation</a>
      <a class="underline-wave" href="#qui-suis-je">Qui suis-je ?</a>
      <a class="underline-wave" href="#contact">Contact</a>
      <!-- <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/works">My Works</RouterLink> -->
    </nav>

    <nav class="mobile">
      <a class="underline-wave" href="#competences">Compétences</a>
      <a class="underline-wave" href="#realisations">Réalisation</a>
      <a class="underline-wave" href="#qui-suis-je">Qui suis-je ?</a>
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