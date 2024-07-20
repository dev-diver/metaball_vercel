let x = 0;
let canvas;
let ctx;
let frameInterval;
let currentTime, deltaTime;
let previousTime;

addEventListener("resize", () => setSize());
addEventListener("load", () => init());

function setSize() {
  canvas.height = innerHeight;
  canvas.width = innerWidth;
}

function init() {
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

  ctx.fillStyle = "rgb(200 0 0)";
  ctx.fillRect(x, x, 50, 50);

  ctx.fillStyle = "rgb(0 0 200 / 50%)";
  ctx.fillRect(30, 30, 50, 50);

  x++;
  window.requestAnimationFrame(anim); //마지막 줄에 호출하는게 frame드롭 방지
}

function drawBackground() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}
