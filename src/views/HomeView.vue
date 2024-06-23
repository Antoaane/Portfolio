<script setup>
  import star_1_svg from '../components/SVGs/star_1_svg.vue'
  import arrow_down_svg from '../components/SVGs/arrow_down_svg.vue'
  import wave_extended_svg from '../components/SVGs/wave_extended_svg.vue'
  import star_little_svg from '../components/SVGs/star_little_svg.vue'
  import bg_innerwav_svg from '../components/SVGs/bg_innerwav_svg.vue'
</script>

<template>
  <main>
    <div id="top">

      <img src="/res/images/bg.svg" alt="background">

      <div class="container">
        <div>
          <img src="/res/images/menu_visibility.svg" alt="arrière plan menu">
        </div>
      </div>

      <div class="filters">
        <div class="container">

          <h1 class="main-title">
            <span class="top">Je développe</span>
            <span class="bot">
              <star_1_svg /> vos projets
            </span>
          </h1>
          
          <a href="#competences">
            <div>
              <arrow_down_svg />
            </div>
          </a>

        </div>
      </div>
      
    </div>
    <div id="competences">
      <div class="container grid grid-cols-12">

        <div class="text col-span-5">

          <h2 class="h2">
            Votre site <span>w</span>eb <br>
            sur mes<span>u</span>re
          </h2>

          <p>
            Site e-commerce, vitrine en ligne, blog personnel ou encore bien plus encor. Je m'adapte à vos besoins et vos envies pour faire naître votre vision ! Et si vous n'avez pas d'idée encore précises je vous aide à préparer et structurer le projet qui vous correspond.
            <br><br>
            Mes compétences permettent de collaborer ensemble pour que votre produit soit le plus personnalisé possible. La certification Opquast atteste de mon engagement à respecter les meilleures pratiques web et à fournir des sites web de qualité, accessibles et performants.
          </p>

        </div>

        <div class="illustration col-span-7">
          <img src="/res/images/illustration_competences.png" alt="">
        </div>

      </div>
    </div>
    <div id="realisations">

      <div class="title-container container">

        <div class="waves">
          <wave_extended_svg />
          <wave_extended_svg />
        </div>

        <h2 class="h2">
          Quelques tra<span>v</span>aux
        </h2>

        <div class="waves">
          <wave_extended_svg />
          <wave_extended_svg />
        </div>

      </div>

      <div class="container _realisations _first">

        <img class="realisation _innerwav" src="/res/images/innerwav.jpg" alt="">

        <star_little_svg />

        <div class="description _innerwav">
          <div class="content">
            <h3 class="h3">Inner<span>w</span>av</h3>
            <p>
              Site web de vente de prestation de mastering audio personnalisé. Présentation avant/après des projet de mastering déjà réalisés. 
              <br><br>
              Création des commandes laissant le choix au client de définir son projet et de choisir les options de mastering qu'il souhaite appliquer. 
              <br><br>
              Propose un espace client pour suivre l'avancement des commandes et émettre un certain nombre de retours si besoin.
            </p>
          </div>
        </div>

      </div>

      <div class="container _realisations">

        <div class="description _innerwav">
          <div class="content">
            <h3 class="h3">Inner<span>w</span>av</h3>
            <p>
              Site web de vente de prestation de mastering audio personnalisé. Présentation avant/après des projet de mastering déjà réalisés. 
              <br><br>
              Création des commandes laissant le choix au client de définir son projet et de choisir les options de mastering qu'il souhaite appliquer. 
              <br><br>
              Propose un espace client pour suivre l'avancement des commandes et émettre un certain nombre de retours si besoin.
            </p>
          </div>
        </div>

        <star_little_svg />

        <img class="realisation _innerwav" src="/res/images/la_renaissance.jpg" alt="">

      </div>
      
    </div>
  </main>
</template>
