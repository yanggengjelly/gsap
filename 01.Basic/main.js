// 애니메이선 순서
// var tl = gsap.timeline();

// tl.to("h1", { duration: 2, x: 400 });
// tl.to("h2", {
//   duration: 2,
//   scale: 1,
//   opacity: 0,
//   delay: 0.5,
//   stagger: 1,
//   x: 400,
//   force3D: true,
// });

gsap.to("h1", { duration: 2, x: 100 });

gsap.to("h2", {
  duration: 2,
  scale: 1,
  opacity: 0,
  // delay: 0.5,
  stagger: 1,
  x: 100,
  force3D: true,
});

//gsap.to()
//to()는 어디~까지

//gsap.from()
//from()은 어디~부터

//gsap.formTo()
//fromTo()는 어디~부터 어디~까지

let nav = document.querySelector(".nav");

let tween = gsap.to(".flair", {
  duration: 2,
  x: () => nav.offsetWidth, // animate by the px width of the nav
  xPercent: -100, // offset by the width of the box
  rotation: 360,
  ease: "none",
  paused: true,
});

// click handlers for controlling the tween instance...
document.querySelector("#play").onclick = () => tween.play();
document.querySelector("#pause").onclick = () => tween.pause();
document.querySelector("#resume").onclick = () => tween.resume();
document.querySelector("#reverse").onclick = () => tween.reverse();
document.querySelector("#restart").onclick = () => tween.restart();
