import GameObject from './GameObject';

const SPEED = 3;

export default class Bullet extends GameObject {
  x: number;
  y: number;
  constructor(game: any, init: { x: number; y: number }) {
    super(game);
    this.x = init.x;
    this.y = init.y;
  }
  render(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = '#868686';
    ctx.beginPath();
    ctx.arc(this.x, this.y, 2, 0, 2 * Math.PI);
    ctx.fill();
  }
  tick(delta: number) {
    this.y -= SPEED * delta;
  }
}
