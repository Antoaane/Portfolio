<template>
  <main>
    <div id="top" class="container">

      <video autoplay muted loop speed="5" id="bg-video">
        <source src="/res/videos/bg.mp4" type="video/mp4">
      </video>

      <h1 class="main-title">
        <span class="top">Je développe</span>
        <span class="bot">vos projets</span>
      </h1>
      
    </div>
    <div id="dscription">
      <p>
        Je suis un développeur web et mobile basé à Paris. Je suis passionné par la création de sites web et d'applications mobiles. Je suis spécialisé dans le développement front-end et back-end. Je suis également un passionné de nouvelles technologies et de design.
        <br><br><br><br><br><br><br><br><br><br><br>
      </p>
    </div>
  </main>
</template>

<script setup>
  import myComponent from '../components/MyComponent.vue'
</script>