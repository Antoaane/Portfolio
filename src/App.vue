<template>
  <header>
      <nav class="h-full container flex justify-between items-center">
        <a href="./home.html">
            <span>Mon</span>
            <span>VPS</span>
        </a>
        <ul class="hidden" id="menu">
          <li><RouterLink to="/works">WORKS</RouterLink></li>
          <li><RouterLink to="/">PORTFOLIO</RouterLink></li>
          <li><RouterLink to="/">MON CV</RouterLink></li>
          <li><RouterLink to="/">LINKED IN</RouterLink></li>
          <li><RouterLink to="/">CONTACT</RouterLink></li>
        </ul>
        
        <div class="close" id="hamburger">
            <span id="menu-bg"></span>
            <span id="tomato"></span>
            <span id="cheese"></span>
            <span id="steak"></span>
        </div>
    </nav>
  </header>

  <RouterView />
  
  <footer>
    <p>Footer</p>
  </footer>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

const hamburger = ref(null);
const menu = ref(null);
const tomato = ref(null);
const cheese = ref(null);
const steak = ref(null);

onMounted(() => {
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('menu');
  const tomato = document.getElementById('tomato');
  const cheese = document.getElementById('cheese');
  const steak = document.getElementById('steak');

  hamburger.addEventListener('click', () => {
      if (menu.classList.contains('hidden')) {
          tomato.style.animation = "tomato 0.5s cubic-bezier(0.68,-0.55,0.29,1.65) forwards";
          cheese.style.transform = "scaleX(0)";
          steak.style.animation = "steak 0.5s cubic-bezier(0.68,-0.55,0.29,1.65) forwards";

          menu.classList.remove('hidden');
      } else {
          tomato.style.animation = "tomatoBack 0.5s cubic-bezier(0.68,-0.55,0.29,1.65) forwards"
          cheese.style.transform = "scaleX(1)";
          steak.style.animation = "steakBack 0.5s cubic-bezier(0.68,-0.55,0.29,1.65) forwards"

          menu.classList.add('hidden');
      }
  });
});
</script>