<script setup>
import star_svg from '@/components/SVGs/star_svg.vue';
import star_borders_svg from '@/components/SVGs/star_borders_svg.vue';
import arrow_down_svg from '@/components/SVGs/arrow_down_svg.vue';

const props = defineProps({
  content: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div id="top">
    <img src="/res/images/bg.svg" :alt="props.content.backgroundAlt">

    <div class="container">
      <div>
        <img src="/res/images/menu_visibility.svg" :alt="props.content.menuAlt">
      </div>
    </div>

    <div class="filters">
      <div class="container">
        <h1 class="main-title main-title--desktop">
          <span class="top">{{ props.content.titleTop }}</span>
          <span class="bot">
            <star_svg /> {{ props.content.titleBottom }}
          </span>
        </h1>

        <h1 class="main-title main-title--mobile" v-html="props.content.titleMobileHtml"></h1>

        <a :href="props.content.scrollHref">
          <div>
            <star_borders_svg />
            <arrow_down_svg />
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
