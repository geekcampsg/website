import GameObject from './GameObject';
import type Bullet from './Bullet';
import { getRandom } from './utils';

let imagesLoaded = false;
const geekcampSprite = new Image();
geekcampSprite.src = '/images/game/geekcamp_sprite.png';
geekcampSprite.onload = function () {
  imagesLoaded = true;
};

const DIAMETER = 30;
const RADIUS = DIAMETER / 2;
const SPEED = 2;

export default class Alien extends GameObject {
  x: number;
  y: number;
  constructor(game: any) {
    super(game);
    this.x = getRandom(200, game.WIDTH - 200);
    this.y = 0;
  }

  render(ctx: CanvasRenderingContext2D) {
    if (imagesLoaded) {
      ctx.drawImage(geekcampSprite, this.x - RADIUS, this.y - RADIUS);
    } else {
      ctx.fillStyle = 'black';
      ctx.beginPath();
      ctx.arc(this.x, this.y, RADIUS, 0, 2 * Math.PI);
      ctx.fill();
    }
  }

  tick(delta: number) {
    this.y += SPEED * delta;
    if (this.y > this.game.HEIGHT) {
      this.destroy();
      this.game.dispatch('alien:win', this);
    }
  }

  hittest(x: number, y: number) {
    const dx = this.x - x;
    const dy = this.y - y;
    return Math.sqrt(dx * dx + dy * dy) < RADIUS;
  }
}
