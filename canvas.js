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
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function init() {
  b = new Ball(canvas.width, canvas.height);
}

function render() {
  b.move(1, 1);
  b.render(ctx);
  drawPixel();
}

function drawPixel() {
  const imageData = ctx.createImageData(canvas.width, canvas.height);
  const data = imageData.data;
  for (let i = 0; i < canvas.width; i++) {
    for (let j = 0; j < canvas.height; j++) {
      let index = (i + j * canvas.width) * 4;
      let d = dist(i, j, b.x, b.y);
      for (let k = 0; k < 3; k++) {
        data[index + k] = d;
      }
      data[index + 3] = 255;
    }
  }
  ctx.putImageData(imageData, 0, 0);
}

function dist(a, b, x, y) {
  return Math.sqrt((a - x) * (a - x) + (b - y) * (b - y));
}
