<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { gsap } from 'gsap';
import { useLocale } from '@/composables/useLocale';

const { navigation } = useLocale();
const headerRef = ref(null);

let lastKnownScrollPosition = 0;
let ticking = false;

const updateHeaderState = (scrollPos) => {
  const header = headerRef.value;
  if (!header) {
    return;
  }

  if (scrollPos > 150) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
};

const handleScroll = () => {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      updateHeaderState(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });

  gsap.from('.nav-item', {
    delay: 1.5,
    duration: 0.5,
    y: -100,
    ease: 'power4.out',
    stagger: 0.1,
  });
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <header ref="headerRef">
    <nav id="desk" class="container">
      <div v-for="item in navigation" :key="item.id" class="nav-item">
        <a class="underline-wave" :href="item.href">{{ item.label }}</a>
      </div>
    </nav>
  </header>
</template>
