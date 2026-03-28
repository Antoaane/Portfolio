<script setup>
import wave_little_svg from '@/components/SVGs/wave_little_svg.vue';
import star_svg from '@/components/SVGs/star_svg.vue';

const props = defineProps({
  content: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div id="qui-suis-je" class="container">
    <div class="content">
      <h2 class="h2">
        <wave_little_svg /> {{ props.content.title }}
      </h2>
      <div class="image image--mobile">
        <star_svg className="who_i_am_star" />
        <img src="\res\images\profile.jpg" :alt="props.content.profileAlt">
      </div>
      <p v-html="props.content.bodyHtml"></p>
    </div>

    <div class="image image--desktop">
      <star_svg className="who_i_am_star" />
      <img src="\res\images\profile.jpg" :alt="props.content.profileAlt">
    </div>
  </div>
</template>
