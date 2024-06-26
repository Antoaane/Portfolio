<script setup>
import { RouterLink, RouterView } from 'vue-router'

window.addEventListener('scroll', function() {
  var header = document.querySelector('header');
  if (window.scrollY > 150) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
</script>

<template>
  <header>
    <nav id="desk" class="container">
      <a class="underline-wave" href="#competences">Compétences</a>
      <a class="underline-wave" href="#realisations">Réalisation</a>
      <a class="underline-wave" href="#qui-suis-je">Qui suis-je ?</a>
      <!-- <a class="underline-wave" href="#contact">Contact</a>
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/works">My Works</RouterLink> -->
    </nav>

    <!-- <nav id="mobile">
      <a class="underline-wave" href="#competences">Compétences</a>
      <a class="underline-wave" href="#realisations">Réalisation</a>
      <a class="underline-wave" href="#qui-suis-je">Qui suis-je ?</a>
      <a class="underline-wave" href="#contact">Contact</a>
    </nav> -->
  </header>

  <RouterView />
  
  <!-- <footer>
    <p>Footer</p>
  </footer> -->
</template>