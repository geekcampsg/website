let _id = 0;
function id() {
  return _id++;
}

export default class GameObject {
  game: any;
  id: number;
  constructor(game: any) {
    this.game = game;
    this.game.register(this);
    this.id = id();
  }
  render(ctx: CanvasRenderingContext2D) {}
  tick(delta: number) {}
  keyHandler(key: string) {}
  destroy() {
    this.game.unregister(this);
    return this;
  }
}
