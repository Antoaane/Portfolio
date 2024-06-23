<script setup>
  import star_svg from '../components/SVGs/star_svg.vue'
  import arrow_down_svg from '../components/SVGs/arrow_down_svg.vue'
  import wave_extended_svg from '../components/SVGs/wave_extended_svg.vue'
  import star_little_svg from '../components/SVGs/star_little_svg.vue'
  import wave_little_svg from '../components/SVGs/wave_little_svg.vue'
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
              <star_svg /> vos projets
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

      <div class="container _realisations _borders">

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

        <div class="description _la-renaissance">
          <div class="content">
            <h3 class="h3">La Ren<span>a</span>issance</h3>
            <p>
              Site vitrine pour l'imprimerie La Renaissance à Troyes. Présentation des services proposés par l'imprimerie et des réalisations déjà effectuées.
              <br><br>
              Site web 100% administrable par le client. Possibilité de modifier les textes, les images et titres des différentes sections du site.
            </p>
          </div>
        </div>

        <star_little_svg />

        <img class="realisation _la-renaissance" src="/res/images/la_renaissance.jpg" alt="">

      </div>

      <div class="container _realisations">

        <img class="realisation _initial-expertise" src="/res/images/bg_initial_expertise.jpg" alt="">

        <star_little_svg />

        <div class="description _initial-expertise">
          <div class="content">
            <h3 class="h3">INITIAL Expe<span>r</span>tise</h3>
            <p>
              Site vitrine pour l'imprimerie La Renaissance à Troyes. Présentation des services proposés par l'imprimerie et des réalisations déjà effectuées.
              <br><br>
              Site web 100% administrable par le client. Possibilité de modifier les textes, les images et titres des différentes sections du site.
            </p>
          </div>
        </div>

      </div>

      <div class="container _realisations">

        <div class="description _zetruc">
          <div class="content">
            <h3 class="h3">App <span>m</span>obile Zetruc</h3>
            <p>
              Site vitrine pour l'imprimerie La Renaissance à Troyes. Présentation des services proposés par l'imprimerie et des réalisations déjà effectuées.
              <br><br>
              Site web 100% administrable par le client. Possibilité de modifier les textes, les images et titres des différentes sections du site.
            </p>
          </div>
        </div>

        <star_little_svg />

        <div class="multiple-imgs realisation _borders">
          <img class="_zetruc" src="/res/images/zetruc1.jpg" alt="">
          <div class="line"></div>
          <img class="_zetruc" src="/res/images/zetruc2.jpg" alt="">
          <div class="line"></div>
          <img class="_zetruc" src="/res/images/zetruc3.jpg" alt="">
        </div>

      </div>

      <div id="qui-suis-je" class="container grid grid-cols-12 items-center">
        
        <div class="content col-span-6">
          <h2 class="h2">
            <wave_little_svg /> Qui suis-je ?
          </h2>
          <p>
            Je suis Antoine Lauzis, un développeur web passionné et diplômé originaire de Guadeloupe, actuellement basé à Troyes. C’est assez tôt, lors de mes premières années de lycée, que mon intérêt pour les technologies du web à émergé et est devenu une passion qui ne m’a pas lâché depuis. J’ai donc poursuivi mes études sur la préparation d’un Bachelor Universitaire de Technologie en Métiers du Multimédia et de l’Internet (BUT MMI) en parcours développement web. 
            <br><br>
            Ce cursus de 3 ans m’a permis d’acquérir des bases très solides dans ce domaine et m’a rendu très polyvalent notamment grâce à l’apprentissage et la maîtrise de nombreux logiciels créatifs (Figma, Illustrator, After Effect, Premiere pro, etc). C’est cependant sur le terrain, lors de mon expérience de 2 ans en entreprise que j’ai pu acquérir les connaissance et maîtrisé les technologies qui font de moi un développeur aguerri.
            <br><br>
            Aujourd'hui, je suis en quête des prochains projets qui me feront évoluer en tant que développeur et qui mettront à l’épreuve mes compétence. Je cherche jours après jours, projets après projets à acquérir de nouvelles connaissances et à faire grandir mon expérience. 
          </p>
        </div>

        <div class="image col-span-6">
          <star_svg />
          <img src="\res\images\profile.jpg" alt="">
        </div>

      </div>

    </div>
  </main>
</template>
