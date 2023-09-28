import GameObject from './GameObject';

let imagesLoaded = false;
const geekcampTent = new Image();
geekcampTent.src = '/images/game/geekcamp_tent.png';
geekcampTent.onload = function () {
  imagesLoaded = true;
};

const TRIANGLE_BASE = 200;
const TRIANGLE_HEIGHT = 172;
// some parts of the drawings are not hit maps
const TRIANGLE_TOP_PADDING = 39;
const TRIANGLE_HALF_BASE = TRIANGLE_BASE / 2;
const BULLET_INIT_Y = TRIANGLE_HEIGHT - TRIANGLE_TOP_PADDING;

export default class Hero extends GameObject {
  x: number = 0;
  speed: number = 0;
  acceleration: number = 0;
  maxSpeed: number = 0;
  maxAcceleration: number = 0;
  accelerationDelta: number = 0;
  friction: number = 0;
  bulletCount: number = 0;
  unsubscribe: () => void;
  constructor(game: any) {
    super(game);
    this.reset();

    this.unsubscribe = game.GLOBALS.subscribe(($global) => {
      this.maxSpeed = $global.MAX_SPEED;
      this.maxAcceleration = $global.MAX_ACCELERATION;
      this.accelerationDelta = $global.ACCELERATION;
      this.friction = $global.FRICTION;
      this.bulletCount = $global.BULLET_COUNT;
    });
  }

  reset() {
    this.x = this.game.WIDTH / 2;
    this.speed = 0;
    this.acceleration = 0;
  }

  render(ctx: CanvasRenderingContext2D) {
    if (imagesLoaded) {
      ctx.drawImage(
        geekcampTent,
        this.x - TRIANGLE_HALF_BASE,
        this.game.HEIGHT - TRIANGLE_HEIGHT,
      );
    } else {
      ctx.fillStyle = 'black';
      ctx.beginPath();
      ctx.moveTo(
        this.x,
        this.game.HEIGHT - TRIANGLE_HEIGHT + TRIANGLE_TOP_PADDING,
      );
      ctx.lineTo(this.x - TRIANGLE_HALF_BASE, this.game.HEIGHT);
      ctx.lineTo(this.x + TRIANGLE_HALF_BASE, this.game.HEIGHT);
      ctx.fill();
    }
  }
  tick() {
    this.speed = Math.min(
      Math.max(this.speed + this.acceleration, -this.maxSpeed),
      this.maxSpeed,
    );
    this.x = this.x + this.speed;
    if (this.x > this.game.WIDTH - TRIANGLE_HALF_BASE) {
      this.x = this.game.WIDTH - TRIANGLE_HALF_BASE;
      this.speed = 0;
    } else if (this.x < TRIANGLE_HALF_BASE) {
      this.x = TRIANGLE_HALF_BASE;
      this.speed = 0;
    }
    this.speed *= this.friction;
    this.acceleration = 0;
  }
  keyHandler(key: string) {
    switch (key) {
      case 'ArrowLeft':
      case 'ArrowRight':
        this.acceleration = Math.min(
          Math.max(
            this.acceleration +
              (key === 'ArrowLeft'
                ? -this.accelerationDelta
                : this.accelerationDelta),
            -this.maxAcceleration,
          ),
          this.maxAcceleration,
        );
        break;
      case 'Shift': {
        let delta = 0;
        for (let i = 0; i < this.bulletCount; i++) {
          this.game.dispatch('hero:shoot', {
            x: this.x + delta,
            y: this.game.HEIGHT - BULLET_INIT_Y,
          });
          delta = delta <= 0 ? delta * -1 + 5 : delta * -1;
        }
        break;
      }
    }
  }
  destroy() {
    this.unsubscribe();
    return super.destroy();
  }
}
