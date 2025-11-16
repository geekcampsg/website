import type { Writable } from 'svelte/store';

let _id = 0;
function id() {
  return _id++;
}

type GameGlobals = {
  ALIEN_SPAWN_PERIOD: number;
  LIVES: number;
  MAX_SPEED: number;
  MAX_ACCELERATION: number;
  ACCELERATION: number;
  FRICTION: number;
  BULLET_COUNT: number;
};

export type Game = {
  register: (child: GameObject) => void;
  unregister: (child: GameObject) => void;
  WIDTH: number;
  HEIGHT: number;
  GLOBALS: Writable<GameGlobals>;
  dispatch: (event: string, data: unknown) => void;
};

export default class GameObject {
  game: Game;
  id: number;
  constructor(game: Game) {
    this.game = game;
    this.game.register(this);
    this.id = id();
  }
  render(_ctx: CanvasRenderingContext2D) {}
  tick(_delta: number) {}
  keyHandler(_key: string) {}
  destroy() {
    this.game.unregister(this);
    return this;
  }
}
