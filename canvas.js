import { Ball } from "./Ball.js";

let x = 0;
let canvas;
let ctx;
let frameInterval;
let currentTime, deltaTime;
let previousTime;

let b;

window.addEventListener("resize", () => setSize());
window.addEventListener("load", () => initAnim());

function setSize() {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
}

function initAnim() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  if (!canvas) {
    console.log("Canvas not found");
    return;
  }

  frameInterval = 1000 / 60;
  currentTime, deltaTime;
  previousTime = performance.now();

  setSize();
  init();
  window.requestAnimationFrame(anim);
}

function anim() {
  currentTime = performance.now();
  deltaTime = currentTime - previousTime;
  if (deltaTime < frameInterval) {
    window.requestAnimationFrame(anim);
    return;
  }
  previousTime = currentTime;

  drawBackground();
  render();

  window.requestAnimationFrame(anim); //마지막 줄에 호출하는게 frame드롭 방지
}

function drawBackground() {
  console.log("drawBackground", canvas.width, canvas.height);
  console.log("inner", window.innerWidth, window.innerHeight);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function init() {
  b = new Ball(0, 0, 64);
}

function render() {
  b.move(1, 1);
  b.render(ctx);
}
