const btn1 = document.getElementById("simple");
const btn2 = document.getElementById("speedy");
const btn3 = document.getElementById("easy");

gsap.registerPlugin(ScrollTrigger);

gsap.timeline({
  scrollTrigger: {
    trigger: ".animate",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
    scrub: 1,
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
  x: -200,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
})


function animateElement(){
  gsap.timeline({
    scrollTrigger: {
      trigger: ".navigation",
      start: "top 40%",
      end: "bottom center",
      markers: {
        startColor: "#42a6e0",
        endColor: "#000",
        fontSize: "18px",
        fontWeight: "bold",
        indent: 20
      },
    }
  }).
  from(".features-description", {
    y: 80,
    opacity: 1,
    duration: 1,
  })
}

btn1.addEventListener('click', animateElement);
btn2.addEventListener('click', animateElement);
btn3.addEventListener('click', animateElement);