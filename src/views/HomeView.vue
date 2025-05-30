<script setup>
  import Splide from '@splidejs/splide';
  import { onMounted } from 'vue';
  import { animations } from '../components/ANIMATIONS'

  import star_svg from '../components/SVGs/star_svg.vue'
  import star_borders_svg from '../components/SVGs/star_borders_svg.vue'
  import arrow_down_svg from '../components/SVGs/arrow_down_svg.vue'
  import wave_extended_svg from '../components/SVGs/wave_extended_svg.vue'
  import star_little_svg from '../components/SVGs/star_little_svg.vue'
  import wave_little_svg from '../components/SVGs/wave_little_svg.vue'

  onMounted(() => {
    animations();

    const frontEnd = new Splide( '.front-end', {
      type   : 'loop',
      arrows : false,
      pagination: false,
      autoplay: true,
      interval: 1500,
      pauseOnHover: false,
    } );

    frontEnd.mount();

    const frontStyle = new Splide( '.front-style', {
      type   : 'loop',
      direction: 'ttb',
      height: '100%',
      arrows : false,
      pagination: false,
      autoplay: true,
      interval: 1500,
      delay: 500,
      pauseOnHover: false,
    } );

    frontStyle.mount();

    const backEnd = new Splide( '.back-end', {
      type   : 'loop',
      direction: 'rtl',
      arrows : false,
      pagination: false,
      autoplay: true,
      interval: 1500,
      delay: 1000,
      pauseOnHover: false,
    } );

    backEnd.mount();
  });

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

          <h1 class="main-title hidden md:block">
            <span class="top">Je développe</span>
            <span class="bot">
              <star_svg /> vos projets
            </span>
          </h1>

          <h1 class="main-title flex flex-col text-center md:hidden">
            Je<br>développe<br>vos<br>projets
          </h1>
          
          <a href="#competences">
            <div>
              <star_borders_svg />
              <arrow_down_svg />
            </div>
          </a>

        </div>
      </div>
      
    </div>
    <div id="competences">
      <div class="container px-10 grid grid-cols-12">

        <div id="content-1" class="text lg:col-span-5 col-span-full">

          <h2 class="h2">
            Votre site <span>w</span>eb <br>
            sur mes<span>u</span>re
          </h2>

          <p>
            Site e-commerce, vitrine en ligne, blog personnel ou encore bien plus encore. Je m'adapte à vos besoins et vos envies pour faire naître votre vision ! Et si vous n'avez pas d'idée encore précises je vous aide à préparer et structurer le projet qui vous correspond.
            <br><br>
            Mes compétences permettent de collaborer ensemble pour que votre produit soit le plus personnalisé possible. La certification Opquast atteste de mon engagement à respecter les meilleures pratiques web et à fournir des sites web de qualité, accessibles et performants.
          </p>

        </div>

        <div class="illustration lg:col-span-7 col-span-full">
          <div class="w-full aspect-square relative flex items-center justify-center">
            <img class="w-full" src="/res/images/illustration_competences.png" alt="">

            <div class="w-[31.35%] h-[20%] absolute top-[35%] left-[13.25%]">
              <section class="splide front-end w-full h-full opacity-75" aria-label="Splide Basic HTML Example">
                <div class="splide__track h-full">
                  <ul class="splide__list">
                    <li class="splide__slide 2xl:p-10 sm:p-5 p-3 flex items-center justify-center">
                      <img class="h-full w-full object-contain scale-50" src="/res/pictos/logos/html.svg" alt="">
                    </li>
                    <li class="splide__slide 2xl:p-10 sm:p-5 p-3 flex items-center justify-center">
                      <img class="h-full w-full object-contain scale-50" src="/res/pictos/logos/js.svg" alt="">
                    </li>
                    <li class="splide__slide 2xl:p-10 sm:p-5 p-3 flex items-center justify-center">
                      <img class="h-full w-full object-contain scale-50" src="/res/pictos/logos/ts.svg" alt="">
                    </li>
                    <li class="splide__slide 2xl:p-10 sm:p-5 p-3 flex items-center justify-center">
                      <img class="h-full w-full object-contain scale-50" src="/res/pictos/logos/vue.svg" alt="">
                    </li>
                    <li class="splide__slide 2xl:p-10 sm:p-5 p-3 flex items-center justify-center">
                      <img class="h-full w-full object-contain scale-50" src="/res/pictos/logos/react.svg" alt="">
                    </li>
                  </ul>
                </div>
              </section>
            </div>

            <div class="w-[9.35%] h-[19.25%] absolute top-[19.9%] right-[25.7%] ">
              <section class="splide front-style w-full h-full opacity-75" aria-label="Splide Basic HTML Example">
                <div class="splide__track h-full">
                  <ul class="splide__list">
                    <li class="splide__slide sm:p-3 p-1 flex items-center justify-center">
                      <img class="h-full w-full object-contain" src="/res/pictos/logos/css.svg" alt="">
                    </li>
                    <li class="splide__slide sm:p-3 p-1 flex items-center justify-center">
                      <img class="h-full w-full object-contain" src="/res/pictos/logos/sass.svg" alt="">
                    </li>
                    <li class="splide__slide sm:p-3 p-1 flex items-center justify-center">
                      <img class="h-full w-full object-contain" src="/res/pictos/logos/tailwind.svg" alt="">
                    </li>
                  </ul>
                </div>
              </section>
            </div>

            <div class="w-[28.35%] h-[19.25%] absolute bottom-[16.25%] right-[6.8%] ">
              <section class="splide back-end w-full h-full opacity-75" aria-label="Splide Basic HTML Example">
                <div class="splide__track h-full">
                  <ul class="splide__list">
                    <li class="splide__slide 2xl:p-10 sm:p-5 p-3 flex items-center justify-center">
                      <img class="h-full w-full object-contain scale-50" src="/res/pictos/logos/php.svg" alt="">
                    </li>
                    <li class="splide__slide 2xl:p-10 sm:p-5 p-3 flex items-center justify-center">
                      <img class="h-full w-full object-contain scale-50" src="/res/pictos/logos/laravel.svg" alt="">
                    </li>
                    <li class="splide__slide 2xl:p-10 sm:p-5 p-3 flex items-center justify-center">
                      <img class="h-full w-full object-contain scale-50" src="/res/pictos/logos/wordpress.svg" alt="">
                    </li>
                    <li class="splide__slide 2xl:p-10 sm:p-5 p-3 flex items-center justify-center">
                      <img class="h-full w-full object-contain scale-50" src="/res/pictos/logos/themosis.svg" alt="">
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
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
        <a class="img_link" href="innerwav.fr" target="_blank">
          <div class="realisation _innerwav">
            <video class="innerwav-video" autoplay loop muted>
              <source src="/res/videos/innerwav.mp4" type="video/mp4">
              Your browser does not support the video tag.
            </video>
              
            <img class="innerwav-img" src="/res/images/innerwav.jpg" alt="">
          </div>
        </a>

        <div class="star-container">
          <star_little_svg />
        </div>

        <div class="description _innerwav">
          <div class="content">
            <h3 class="h3">Inner<span>w</span>av</h3>
            <p>
              Site web de vente de prestation de mastering audio personnalisé.
              <br><br>
              Création des commandes laissant le choix au client de définir son projet et de choisir les options de mastering qu'il souhaite y appliquer. 
              <br><br>
              Propose un espace client pour suivre l'avancement des commandes et émettre des retours.
            </p>
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
            <h3 class="h3">La Ren<span>a</span>issance</h3>
            <p>
              Site vitrine pour l'imprimerie La Renaissance à Troyes. Présentation des services proposés par l'imprimerie et des réalisations déjà effectuées.
              <br><br>
              Site web 100% administrable par le client. Possibilité de modifier les textes, les images et titres des différentes sections du site.
            </p>
          </div>
        </div>

        <div class="star-container">
          <star_little_svg />
        </div>

        <a class="img_link" href="https://la-renaissance.com/" target="_blank">
          <img class="realisation _la-renaissance" src="/res/images/la_renaissance.jpg" alt="">
        </a>
      </div>

      <div class="container _realisations">
        <a class="img_link" href="https://www.initial-expertise.fr/" target="_blank">
          <img class="realisation _initial-expertise" src="/res/images/bg_initial_expertise.jpg" alt="">
        </a>

        <div class="star-container">
          <star_little_svg />
        </div>

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

        <div class="separator">
          <star_little_svg />
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

        <div class="star-container">
          <star_little_svg />
        </div>

        <a class="img_link" href="#">
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
        <a class="btn-primary" href="/travaux">
          Je veux en voir +
        </a>
      </div>

    </div>

    <div id="qui-suis-je" class="container px-8 grid grid-cols-12 items-center">
        
        <div class="content lg:col-span-6 col-span-full">
          <h2 class="h2">
            <wave_little_svg /> Qui suis-je ?
          </h2>
          <div class="image lg:hidden block">
            <star_svg className="who_i_am_star" />
            <img src="\res\images\profile.jpg" alt="">
          </div>
          <p>
            Je suis Antoine Lauzis, un développeur web passionné et diplômé originaire de Guadeloupe, actuellement basé à Troyes. C’est assez tôt, lors de mes premières années de lycée, que mon intérêt pour les technologies du web a émergé et est devenu une passion qui ne m’a pas lâché depuis. J’ai donc poursuivi mes études sur la préparation d’un Bachelor Universitaire de Technologie en Métiers du Multimédia et de l’Internet (BUT MMI) en parcours développement web. 
            <br><br>
            Ce cursus de trois ans m’a permis d’acquérir des bases très solides dans ce domaine, mais c'est essentiellement sur le terrain, lors de mon expérience de deux ans en entreprise, que j’ai pu acquérir les connaissances et maîtrisé les technologies qui font de moi un développeur aguerri.
            <br><br>
            Aujourd'hui, je suis en quête des prochains projets qui me feront évoluer en tant que développeur et qui mettront à l’épreuve mes compétences. Je cherche, projets après projets, à approfondir mes connaissances et à faire grandir mon expérience. 
          </p>
        </div>

        <div class="image col-span-6 hidden lg:block">
          <star_svg className="who_i_am_star" />
          <img src="\res\images\profile.jpg" alt="">
        </div>

      </div>
      
  </main>
</template>
