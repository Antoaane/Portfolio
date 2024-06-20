<script setup>
  import star_1_svg from '../components/SVGs/star_1_svg.vue'
  import star_arrow_svg from '../components/SVGs/star_arrow_svg.vue'
  import { DotLottieVue } from '@lottiefiles/dotlottie-vue'

  // lottie.loadAnimation({
  //   container: document.getElementById('animation'),
  //   renderer: 'svg',
  //   loop: true,
  //   autoplay: true,
  //   path: '../../public/res/videos/home_blur.json' // Remplace par le chemin vers ton fichier JSON exporté
  // });
</script>

<template>
  <main>
    <div id="top">
      <DotLottieVue style="height: 100vh; width: 100vw" autoplay loop src="/res/videos/home.json" />
      <div class="container">

        <!-- <video autoplay muted loop speed="5" id="bg-video">
          <source src="/res/videos/bg.mp4" type="video/mp4">
        </video> -->

        <h1 class="main-title">
          <span class="top">Je développe</span>
          <span class="bot">
            <star_1_svg /> vos projets
          </span>
        </h1>
        
        <star_arrow_svg />

      </div>
    </div>
    <div id="dscription">
      <p>
        Je suis un développeur web et mobile basé à Paris. Je suis passionné par la création de sites web et d'applications mobiles. Je suis spécialisé dans le développement front-end et back-end. Je suis également un passionné de nouvelles technologies et de design.
        <br><br><br><br><br><br><br><br><br><br><br>
      </p>
    </div>
  </main>
</template>
