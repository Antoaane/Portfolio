<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { gsap } from "gsap";
import { onMounted } from 'vue';

let lastKnownScrollPosition = 0;
let ticking = false;

function doSomething(scrollPos) {
  var header = document.querySelector('header');
  if (scrollPos > 150) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', function() {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});

onMounted(() => {
  gsap.from(".nav-item", {
    delay: 1.5,
    duration: .5,
    y: -100,
    ease: "power4.out",
    stagger: .1
  });
});


</script>

<template>
  <header>
    <nav id="desk" class="container">
      <div class="nav-item">
        <a class="underline-wave" href="#competences">Compétences</a>
      </div>
      <div class="nav-item">
        <a class="underline-wave" href="#realisations">Réalisation</a>
      </div>
      <div class="nav-item">
        <a class="underline-wave" href="#qui-suis-je">Qui suis-je ?</a>
      </div>
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