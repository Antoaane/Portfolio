<script setup>
import { useHomeEffects } from '@/composables/useHomeEffects';
import { useLocale } from '@/composables/useLocale';
import HeroSection from '@/components/sections/HeroSection.vue';
import SkillsSection from '@/components/sections/SkillsSection.vue';
import ProjectsSection from '@/components/sections/ProjectsSection.vue';
import AboutSection from '@/components/sections/AboutSection.vue';

const { home } = useLocale();

useHomeEffects();
</script>

<template>
  <main>
    <HeroSection :content="home.hero" />
    <SkillsSection :content="home.skills" />
    <ProjectsSection :content="home.projects" />
    <AboutSection :content="home.about" />
  </main>
</template>
