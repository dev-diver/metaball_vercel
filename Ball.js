export class Ball {
  constructor(width, height) {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.dx = Math.random() * 10 - 5;
    this.dy = Math.random() * 10 - 5;
    this.r = Math.random() * 20 + 10;
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;
  }

  render(ctx) {
    console.log("render ball");
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fill();
  }
}
