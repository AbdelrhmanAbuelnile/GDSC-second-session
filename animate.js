gsap.registerPlugin(ScrollTrigger);

gsap.timeline({
  scrollTrigger: {
    trigger: ".animate",
    start: "top 80%",
    end: "bottom 70%",
    toggleActions: "play none none reverse",
    scrub: 1,
    // markers: {
    //   startColor: "#42a6e0",
    //   endColor: "#000",
    //   fontSize: "18px",
    //   fontWeight: "bold",
    //   indent: 20
    // },
  },
  defaults: {
    duration: 0.9,
    ease: "sine.inOut"
  }
}).
from(".animate", {
  x: -200,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
})

gsap.timeline({
  scrollTrigger: {
    trigger: ".navigation",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },
  defaults: {
    duration: 0.9,
    ease: "sine.inOut"
  }
}).
from(".navigation", {
  x: -100,
  opacity: 0,
  duration: 0.5,
  stagger: 0.01,
})