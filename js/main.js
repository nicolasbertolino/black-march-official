// Progress bar
window.addEventListener("scroll", function () {
  let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (windowScroll / height) * 100;
  document.getElementById("progressBar").style.height = scrolled + "%";
});

// Animations
gsap.from(".logo", {
  opacity: 0,
  y: 10,
  duration: 1,
  delay: 3.6,
  ease: "power4",
});

gsap.from(".store", {
  opacity: 0,
  y: 10,
  duration: 1,
  delay: 3.8,
  ease: "power4",
});

gsap.from(".socials li", {
  opacity: 0,
  x: 10,
  duration: 1.5,
  delay: 4,
  stagger: 0.1,
  ease: "power4",
});

gsap.from("h1", {
  opacity: 0,
  y: 20,
  skewY: 1,
  duration: 1.5,
  delay: 4.4,
  ease: "power4",
});

gsap.from(".intro", {
  opacity: 0,
  y: 20,
  duration: 1,
  delay: 4.6,
  ease: "power4",
});

gsap.from(".review", {
  scrollTrigger: {
    trigger: ".review",
    start: "top 70%"
  },
  opacity: 0,
  y: 20,
  duration: 1.5,
  ease: "power4",
});

gsap.from(".music article", {
  scrollTrigger: {
    trigger: ".music",
    start: "top 70%"
  },
  opacity: 0,
  y: 20,
  duration: 1.5,
  stagger: 0.2,
  ease: "power4",
});

gsap.from(".live", {
  scrollTrigger: {
    trigger: ".live",
    start: "top 70%"
  },
  opacity: 0,
  y: 20,
  duration: 1.5,
  ease: "power4",
});

gsap.from(".contact", {
  scrollTrigger: {
    trigger: ".contact",
    start: "top 70%"
  },
  opacity: 0,
  y: 20,
  duration: 1.5,
  ease: "power4",
});

gsap.from("footer", {
  scrollTrigger: {
    trigger: "footer",
    start: "top 70%"
  },
  opacity: 0,
  y: 20,
  duration: 1.5,
  ease: "power4",
});
