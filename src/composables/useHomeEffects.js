import { onBeforeUnmount, onMounted } from 'vue';
import Splide from '@splidejs/splide';
import { animations } from '@/components/ANIMATIONS';

export function useHomeEffects() {
  const instances = [];

  const mountSplide = (selector, options) => {
    const element = document.querySelector(selector);
    if (!element) {
      return;
    }

    const instance = new Splide(selector, options);
    instance.mount();
    instances.push(instance);
  };

  onMounted(() => {
    animations();

    mountSplide('.front-end', {
      type: 'loop',
      arrows: false,
      pagination: false,
      autoplay: true,
      interval: 1500,
      pauseOnHover: false,
    });

    mountSplide('.front-style', {
      type: 'loop',
      direction: 'ttb',
      height: '100%',
      arrows: false,
      pagination: false,
      autoplay: true,
      interval: 1500,
      delay: 500,
      pauseOnHover: false,
    });

    mountSplide('.back-end', {
      type: 'loop',
      direction: 'rtl',
      arrows: false,
      pagination: false,
      autoplay: true,
      interval: 1500,
      delay: 1000,
      pauseOnHover: false,
    });
  });

  onBeforeUnmount(() => {
    instances.forEach((instance) => {
      instance.destroy();
    });
  });
}
