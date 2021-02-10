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

gsap.from("h1 span", {
  opacity: 0,
  y: 20,
  skewY: 1,
  duration: 1.5,
  delay: 4.4,
  stagger: 0.1,
  ease: "power4",
});

gsap.from(".intro figure", {
  opacity: 0,
  y: 20,
  skewY: 5,
  rotate: 1,
  duration: 1,
  delay: 4.6,
  ease: "power4",
});
