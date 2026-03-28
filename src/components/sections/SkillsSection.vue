<script setup>
const props = defineProps({
  content: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div id="competences">
    <div class="container">
      <div id="content-1" class="text">
        <h2 class="h2" v-html="props.content.titleHtml"></h2>

        <p v-html="props.content.bodyHtml"></p>
      </div>

      <div class="illustration">
        <div class="skills-illustration">
          <img class="skills-illustration__image" src="/res/images/illustration_competences.png" :alt="props.content.illustrationAlt">

          <div class="skills-orbit skills-orbit--front-end">
            <section class="splide front-end skills-splide" :aria-label="props.content.splideAriaLabel">
              <div class="splide__track">
                <ul class="splide__list">
                  <li class="splide__slide">
                    <img src="/res/pictos/logos/html.svg" alt="">
                  </li>
                  <li class="splide__slide">
                    <img src="/res/pictos/logos/js.svg" alt="">
                  </li>
                  <li class="splide__slide">
                    <img src="/res/pictos/logos/ts.svg" alt="">
                  </li>
                  <li class="splide__slide">
                    <img src="/res/pictos/logos/vue.svg" alt="">
                  </li>
                  <li class="splide__slide">
                    <img src="/res/pictos/logos/react.svg" alt="">
                  </li>
                </ul>
              </div>
            </section>
          </div>

          <div class="skills-orbit skills-orbit--front-style">
            <section class="splide front-style skills-splide" :aria-label="props.content.splideAriaLabel">
              <div class="splide__track">
                <ul class="splide__list">
                  <li class="splide__slide">
                    <img src="/res/pictos/logos/css.svg" alt="">
                  </li>
                  <li class="splide__slide">
                    <img src="/res/pictos/logos/sass.svg" alt="">
                  </li>
                  <li class="splide__slide">
                    <img src="/res/pictos/logos/tailwind.svg" alt="">
                  </li>
                </ul>
              </div>
            </section>
          </div>

          <div class="skills-orbit skills-orbit--back-end">
            <section class="splide back-end skills-splide" :aria-label="props.content.splideAriaLabel">
              <div class="splide__track">
                <ul class="splide__list">
                  <li class="splide__slide">
                    <img src="/res/pictos/logos/php.svg" alt="">
                  </li>
                  <li class="splide__slide">
                    <img src="/res/pictos/logos/laravel.svg" alt="">
                  </li>
                  <li class="splide__slide">
                    <img src="/res/pictos/logos/wordpress.svg" alt="">
                  </li>
                  <li class="splide__slide">
                    <img src="/res/pictos/logos/themosis.svg" alt="">
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
