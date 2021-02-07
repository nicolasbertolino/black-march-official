// Progress bar
window.addEventListener("scroll", function () {
  let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (windowScroll / height) * 100;
  document.getElementById("progressBar").style.height = scrolled + "%";
});



// let btn = document.getElementById("lol");
// btn.addEventListener("click", function () {
//   if (this.style.background == "black") {
//     this.style.background = "white";
//     this.style.color = "black";
//   } else {
//     this.style.background = "black";
//     this.style.color = "white";
//   }
// });

// let btnbis = document.getElementById("lolbis");
// let body = document.getElementById("body");
// btnbis.addEventListener("click", function () {
//   body.classList.toggle("bg");
// });

// function myFunction() {
//     document.getElementById("demo").style.background = "firebrick";
//     document.getElementById("demo").style.color = "white";
// }

// <button onclick="window.scroll({top:50 * window.innerHeight/100, behavior:'smooth'});">scrollade</button>