import { tns } from  "tiny-slider/src/tiny-slider";

export function initializeSlider() {
tns({
    container: ".techstack-logo-carousel",
    slideBy: 1,
    autoplay: true,
    gutter: 15,
    autoplayButtonOutput: false,
    mouseDrag: true,
    nav: false,
    controls: false,
    responsive: {
        0: {
            items: 3,
        },
        540: {
            items: 3,
        },
        720: {
            items: 4,
        },
        960: {
            items: 4,
        },
        1140: {
            items: 6,
        },
    },
});

tns({
    container: ".projects-slider",
    controlscontainer: ".projects-controls",
    mouseDrag: true,
    autoplay: false,
    autoplayButtonOutput: false,
    responsive: {
        0: {
            items: 1,
        },
        540: {
            items: 1,
        },
        768: {
            items: 1,
        },
        992: {
            items: 2,
        },
        1170: {
            items: 2,
        },
    },
});}
