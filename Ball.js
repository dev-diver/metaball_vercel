export class Ball {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.dx = (Math.random() * 5 + 3) * (Math.random() < 0.5 ? -1 : 1);
    this.dy = (Math.random() * 5 + 3) * (Math.random() < 0.5 ? -1 : 1);
    this.r = Math.random() * 10 + 40;
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;

    if (this.x < 0 || this.x > this.canvas.width) {
      this.dx *= -1;
    }
    if (this.y < 0 || this.y > this.canvas.height) {
      this.dy *= -1;
    }
  }

  render() {
    this.ctx.fillStyle = "red";
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    this.ctx.fill();
  }
}
