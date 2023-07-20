<template>
  <header>
      <nav class="h-full flex justify-between items-center">
        <RouterLink class="title" to="/">
            <span>MY </span>
            <span id="vps">VPS</span>
        </RouterLink>
        <ul class="hidden" id="menu">
          <li><RouterLink class="menu-item" to="/works">WORKS</RouterLink></li>
          <li><RouterLink class="menu-item" to="/">PORTFOLIO</RouterLink></li>
          <li><RouterLink class="menu-item" to="/">MON CV</RouterLink></li>
          <li><RouterLink class="menu-item" to="/">LINKED IN</RouterLink></li>
          <li><RouterLink class="menu-item" to="/">CONTACT</RouterLink></li>
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
const tomato = ref(null);
const cheese = ref(null);
const steak = ref(null);

const menu = ref(null);
const menuBg = ref(null);

const vps = ref(null);

onMounted(() => {
  const hamburger = document.getElementById('hamburger');
  const tomato = document.getElementById('tomato');
  const cheese = document.getElementById('cheese');
  const steak = document.getElementById('steak');

  const menu = document.getElementById('menu');
  const menuBg = document.getElementById('menu-bg');

  const vps = document.getElementById('vps');

  hamburger.addEventListener('click', () => {
      if (menu.classList.contains('hidden')) {
        tomato.style.animation = "tomato 0.5s cubic-bezier(0.68,-0.55,0.29,1.65) forwards";
        cheese.style.transform = "scaleX(0)";
        steak.style.animation = "steak 0.5s cubic-bezier(0.68,-0.55,0.29,1.65) forwards";

        menu.classList.remove('hidden');
        menu.style.animation = "menu 0.5s cubic-bezier(1,0,0,1) 0.2s forwards";
        menuBg.style.animation = "menuBg 0.75s cubic-bezier(1,0,0,1) forwards";

        vps.style.animation = "vps 0.75s cubic-bezier(1,0,0,1) forwards";
      } else {
        tomato.style.animation = "tomatoBack 0.5s cubic-bezier(0.68,-0.55,0.29,1.65) forwards"
        cheese.style.transform = "scaleX(1)";
        steak.style.animation = "steakBack 0.5s cubic-bezier(0.68,-0.55,0.29,1.65) forwards"

        menu.style.animation = "menuBack 0.5s cubic-bezier(1,0,0,1) forwards";
        setTimeout(() => {
          menu.classList.add('hidden');
        }, 500);
        menuBg.style.animation = "menuBgBack 0.75s cubic-bezier(1,0,0,1) forwards";

        vps.style.animation = "vpsBack 0.75s cubic-bezier(1,0,0,1) forwards";
      }
  });
});
</script>