"use strict";
//ANIMATIE
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-1000%", duration: 1.5, delay: 0.1 });
tl.to(".intro", { y: "-500%", duration: 2 }, "-=1");

//imagine cu slider

const slider = document.querySelector(".slider-pz");
const before = document.querySelector(".img-container-before");
const after = document.querySelector(".img-container-after");
const container = document.querySelector(".container-slider");

const sliding = (e) => {
  let xPos = e.layerX;
  before.style.width = xPos + "px";
  slider.style.left = xPos + "px";
};

container.addEventListener("click", sliding);
