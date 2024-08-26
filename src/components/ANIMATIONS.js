import { gsap } from 'gsap';
import CustomEase from "gsap/CustomEase";
import ScrollTrigger from "gsap/ScrollTrigger";

export function animations() {
    gsap.registerPlugin(CustomEase);
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".top", {
        delay: 1,
        duration: 1,
        x: 1000,
        opacity: 0,
        ease: "power4.out",
    });
    gsap.to(".bot", {
        delay: 2.2,
        duration: 20,
        x: 20,
        repeat: -1,
        ease: CustomEase.create("custom", "M0,0 C0.3,0 0.2,1 0.5,1 0.8,1 0.7,0 1,0 "),
    });


    gsap.from(".bot", {
        duration: 1,
        delay: 1.15,
        x: -1000,
        opacity: 0,
        ease: "power4.out",
    });
    gsap.to(".top", {
        delay: 2,
        duration: 20,
        x: -20,
        repeat: -1,
        ease: CustomEase.create("custom", "M0,0 C0.3,0 0.2,1 0.5,1 0.8,1 0.7,0 1,0 "),
    });


    gsap.from(".star_svg", {
        duration: 1,
        delay: 1.3,
        x: -2000,
        rotate: -360,
        ease: "power4.out",
    });
    gsap.to(".star_svg", {
        duration: 20,
        delay: 2.2,
        x: -20,
        rotate: 360,
        repeat: -1,
        ease: CustomEase.create("custom", "M0,0 C0.3,0 0.2,1 0.5,1 0.8,1 0.7,0 1,0 "),
    });
    gsap.to(".star_svg", {
        duration: 60,
        delay: 2,
        rotate: 360,
        repeat: -1,
        ease: 'none',
    });


    gsap.from(".star_borders_svg", {
        duration: 1.5,
        delay: 1.3,
        y: 100,
        scale: 2,
        rotate: -30,
        opacity: 0,
        ease: "power4.out",
    });
    gsap.to(".star_borders_svg", {
        duration: 60,
        delay: 2.5,
        rotate: 360,
        ease: "none",
    });


    gsap.from(".arrow_down_svg", {
        duration: 1.5,
        delay: 1.35,
        y: -100,
        opacity: 0,
        ease: "power4.out",
    });


    gsap.from("#content-1 .h2", {
        scrollTrigger: '#content-1',
        duration: 1,
        delay: 0.5,
        x: -100,
        opacity: 0,
        ease: "power4.out",
    });
    gsap.from("#content-1 p", {
        scrollTrigger: '#content-1',
        duration: 1,
        delay: 0.75,
        x: -100,
        opacity: 0,
        ease: "power4.out",
    });

    gsap.from(".illustration", {
        scrollTrigger: '#content-1',
        duration: 1,
        delay: 1,
        y: -150,
        opacity: 0,
        ease: "power4.out",
    });

    gsap.from("#realisations .h2", {
        scrollTrigger: '#realisations .h2',
        duration: 1,
        delay: 0.5,
        y: -100,
        opacity: 0,
        ease: "power4.out",
    });
    gsap.from("#realisations .waves:nth-child(1)", {
        scrollTrigger: '#realisations .h2',
        duration: 1,
        delay: 0.5,
        x: 100,
        opacity: 0,
        ease: "power4.out",
    });
    gsap.from("#realisations .waves:nth-child(3)", {
        scrollTrigger: '#realisations .h2',
        duration: 1,
        delay: 0.5,
        x: -100,
        opacity: 0,
        ease: "power4.out",
    });

    gsap.from("._innerwav .innerwav-img", {
        scrollTrigger: '._innerwav',
        duration: 1,
        delay: 0.5,
        x: -100,
        opacity: 0,
        ease: "power4.out",
    });
    gsap.from("._innerwav .innerwav-video", {
        scrollTrigger: '._innerwav',
        duration: .1,
        delay: 1,
        opacity: 0,
        ease: "power4.out"
    });
    gsap.from(".description._innerwav", {
        scrollTrigger: '._innerwav',
        duration: 1,
        delay: 0.5,
        x: 100,
        opacity: 0,
        ease: "power4.out",
    });

    gsap.from("._   ", {
        scrollTrigger: '._innerwav',
        duration: .1,
        delay: 1,
        opacity: 0,
        ease: "power4.out"
    });
    gsap.from(".description._innerwav", {
        scrollTrigger: '._innerwav',
        duration: 1,
        delay: 0.5,
        x: 100,
        opacity: 0,
        ease: "power4.out",
    });

    const stars = document.querySelectorAll('.star-container');

    console.log(stars);

    stars.forEach(star => {
        gsap.from(star, {
            scrollTrigger: star,
            duration: 1,
            delay: 0.5,
            y: -100,
            opacity: 0,
            ease: "power4.out",
        });

        gsap.to(star, {
            duration: 20,
            delay: 0.5,
            rotate: 360,
            repeat: -1,
            ease: "linear",
        });
    })

    gsap.from(".who_i_am_star", {
        scrollTrigger: '#qui-suis-je',
        duration: 1,
        delay: 0.5,
        y: -100,
        opacity: 0,
        ease: "power4.out",
    });
    gsap.to(".who_i_am_star", {
        duration: 20,
        delay: 0.5,
        rotate: 360,
        repeat: -1,
        ease: "linear",
    });
};
