<script setup>
import wave_extended_svg from '@/components/SVGs/wave_extended_svg.vue';
import star_little_svg from '@/components/SVGs/star_little_svg.vue';

const props = defineProps({
  content: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div id="realisations">
    <div class="title-container container">
      <div class="waves">
        <wave_extended_svg />
        <wave_extended_svg />
      </div>

      <h2 class="h2" v-html="props.content.titleHtml"></h2>

      <div class="waves">
        <wave_extended_svg />
        <wave_extended_svg />
      </div>
    </div>

    <div class="container _realisations _borders">
      <a class="img_link" :href="props.content.items.innerwav.href" target="_blank">
        <div class="realisation _innerwav">
          <video class="innerwav-video" autoplay loop muted>
            <source src="/res/videos/innerwav.mp4" type="video/mp4">
            {{ props.content.videoFallback }}
          </video>

          <img class="innerwav-img" src="/res/images/innerwav.jpg" alt="">
        </div>
      </a>

      <div class="star-container">
        <star_little_svg />
      </div>

      <div class="description _innerwav">
        <div class="content">
          <h3 class="h3" v-html="props.content.items.innerwav.titleHtml"></h3>
          <p v-html="props.content.items.innerwav.descriptionHtml"></p>
        </div>
      </div>

      <div class="separator">
        <star_little_svg />
      </div>
    </div>

    <div class="container _realisations">
      <div class="separator">
        <star_little_svg />
      </div>

      <div class="description _la-renaissance">
        <div class="content">
          <h3 class="h3" v-html="props.content.items.laRenaissance.titleHtml"></h3>
          <p v-html="props.content.items.laRenaissance.descriptionHtml"></p>
        </div>
      </div>

      <div class="star-container">
        <star_little_svg />
      </div>

      <a class="img_link" :href="props.content.items.laRenaissance.href" target="_blank">
        <img class="realisation _la-renaissance" src="/res/images/la_renaissance.jpg" alt="">
      </a>
    </div>

    <div class="container _realisations">
      <a class="img_link" :href="props.content.items.initialExpertise.href" target="_blank">
        <img class="realisation _initial-expertise" src="/res/images/bg_initial_expertise.jpg" alt="">
      </a>

      <div class="star-container">
        <star_little_svg />
      </div>

      <div class="description _initial-expertise">
        <div class="content">
          <h3 class="h3" v-html="props.content.items.initialExpertise.titleHtml"></h3>
          <p v-html="props.content.items.initialExpertise.descriptionHtml"></p>
        </div>
      </div>

      <div class="separator">
        <star_little_svg />
      </div>
    </div>

    <div class="container _realisations">
      <div class="description _zetruc">
        <div class="content">
          <h3 class="h3" v-html="props.content.items.zetruc.titleHtml"></h3>
          <p v-html="props.content.items.zetruc.descriptionHtml"></p>
        </div>
      </div>

      <div class="star-container">
        <star_little_svg />
      </div>

      <a class="img_link" :href="props.content.items.zetruc.href">
        <div class="multiple-imgs realisation _borders">
          <img class="_zetruc" src="/res/images/zetruc1.jpg" alt="">
          <div class="line"></div>
          <img class="_zetruc" src="/res/images/zetruc2.jpg" alt="">
          <div class="line"></div>
          <img class="_zetruc" src="/res/images/zetruc3.jpg" alt="">
        </div>
      </a>
    </div>

    <div>
      <a class="btn-primary" :href="props.content.ctaHref">
        {{ props.content.ctaLabel }}
      </a>
    </div>
  </div>
</template>
