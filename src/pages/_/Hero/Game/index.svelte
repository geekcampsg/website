<script lang="ts">
import { onMount } from 'svelte';
import { writable } from 'svelte/store';
import Alien from './Alien';
import Bullet from './Bullet';
import type GameObject from './GameObject';
import Hero from './Hero';
import { getRandom } from './utils';

let canvas: HTMLCanvasElement;

interface Props {
  onGameEvent: (event: string) => void;
}

const { onGameEvent }: Props = $props();

const LOCALSTORAGE_KEY = 'geekcamp:shooter';
const INITIAL_ALIEN_SPAWN_PERIOD = 3_000; // 3s
const INITIAL_LIVES = 5;
const INITIAL_WIDTH = 750;
const INITIAL_HEIGHT = 600;
let fullscreen = $state(false);
let windowHeight = $state(0);
let windowWidth = $state(0);
let width = $derived(fullscreen ? windowWidth : INITIAL_WIDTH);
let height = $derived(fullscreen ? windowHeight : INITIAL_HEIGHT);

const GLOBALS = writable({
  ALIEN_SPAWN_PERIOD: INITIAL_ALIEN_SPAWN_PERIOD,
  LIVES: INITIAL_LIVES,
  MAX_SPEED: 30,
  MAX_ACCELERATION: 5,
  ACCELERATION: 1.75,
  FRICTION: 0.9,
  BULLET_COUNT: 1,
});

const children: GameObject[] = [];
const game = {
  register(child: GameObject) {
    children.push(child);
  },
  unregister(child: GameObject) {
    children.splice(children.indexOf(child), 1);
  },
  get WIDTH() {
    return width;
  },
  get HEIGHT() {
    return height;
  },
  get GLOBALS() {
    return GLOBALS;
  },
  dispatch: (event: string, data: unknown) => {
    switch (event) {
      case 'alien:win': {
        aliens.splice(aliens.indexOf(data), 1);
        $GLOBALS.LIVES--;
        break;
      }
      case 'alien:dead': {
        score++;
        $GLOBALS.ALIEN_SPAWN_PERIOD *= getRandom(0.9, 1);
        break;
      }
      case 'hero:shoot': {
        bullets.push(new Bullet(game, data));
        break;
      }
    }
  },
};

let aliens = $state<Alien[]>([]);
let bullets = $state<Bullet[]>([]);
const hero = new Hero(game);
let score = $state(0);
let startTime = $state(0);
let endTime = $state(0);
let gameOver = $state(true);
let highscore = $state(
  JSON.parse(window.localStorage.getItem(LOCALSTORAGE_KEY) || '{}').highscore ||
    0
);
let nextAlienSpawn = $state<number>(0);
function spawnAliens() {
  const timeNow = Date.now();
  if (!nextAlienSpawn || nextAlienSpawn < timeNow) {
    aliens.push(new Alien(game));
    nextAlienSpawn =
      timeNow + $GLOBALS.ALIEN_SPAWN_PERIOD * getRandom(0.75, 1.25);
  }
}
function hitTest() {
  alien: for (let i = 0; i < aliens.length; ) {
    const alien = aliens[i];
    for (let j = 0; j < bullets.length; j++) {
      const bullet = bullets[j];
      if (alien.hittest(bullet.x, bullet.y)) {
        alien.destroy();
        bullet.destroy();
        bullets.splice(j, 1);
        aliens.splice(i, 1);
        game.dispatch('alien:dead', alien);
        continue alien;
      }
    }
    i++;
  }
}

function cleanup() {
  aliens.forEach((alien) => {
    alien.destroy();
  });
  aliens.splice(0, aliens.length);
  bullets.forEach((bullet) => {
    bullet.destroy();
  });
  bullets.splice(0, bullets.length);
}

function resetGame() {
  score = 0;
  startTime = Date.now();
  $GLOBALS.LIVES = INITIAL_LIVES;
  $GLOBALS.ALIEN_SPAWN_PERIOD = INITIAL_ALIEN_SPAWN_PERIOD;
  hero.reset();
}

function resetCanvas(ctx: CanvasRenderingContext2D) {
  ctx.beginPath();
  ctx.fillStyle = '#F8F8F8';
  ctx.fillRect(0, 0, width, height);
}

function nextFrame() {
  return new Promise((resolve) => requestAnimationFrame(resolve));
}

function handleKeyPress() {
  if (!lastKey) return;

  if (gameOver) {
    switch (lastKey) {
      case 'P':
      case 'p': {
        gameOver = false;
        resetGame();
        break;
      }
      case 'Q':
      case 'q': {
        onGameEvent('quit');
        break;
      }
      case 'F':
      case 'f': {
        fullscreen = !fullscreen;
        break;
      }
    }
  } else {
    if (lastKey === 'q' || lastKey === 'Q') {
      gameOver = true;
    }
    for (const child of children) {
      child.keyHandler(lastKey);
    }
  }
  lastKey = undefined;
}

function updateScene() {
  if (gameOver) return;

  spawnAliens();

  for (const child of children) {
    child.tick(1);
  }

  hitTest();

  if ($GLOBALS.LIVES <= 0) {
    gameOver = true;
    endTime = Date.now();
    if (score > highscore) {
      highscore = score;
      if (window.localStorage) {
        const gameData = JSON.parse(
          window.localStorage.getItem(LOCALSTORAGE_KEY) || '{}'
        );
        gameData.highscore = highscore;
        window.localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(gameData));
      }
    }
  }
}

function renderScene() {
  const ctx = canvas.getContext('2d')!;
  resetCanvas(ctx);
  if (gameOver) {
    renderGameOverScreen(ctx);
  } else {
    for (const child of children) {
      child.render(ctx);
    }
    renderStats(ctx);
  }
}

function renderGameOverScreen(ctx: CanvasRenderingContext2D) {
  ctx.fillStyle = '#282a35';
  ctx.font = '12px "PT Mono"';
  ctx.textAlign = 'center';
  ctx.fillText('This game is still in beta.', width / 2, 50);
  ctx.fillText(
    'Submit a PR to github.com/geekcampsg/geekcampsg.github.io to improve the game. Thanks!',
    width / 2,
    70
  );

  ctx.textAlign = 'left';
  ctx.font = '16px "PT Mono"';
  ctx.fillText(`High Score: ${highscore}`, width / 2 - 80, 180);
  if (endTime > startTime) {
    ctx.fillText(`Last Score: ${score}`, width / 2 - 80, 200);
  }

  ctx.textAlign = 'center';

  ctx.font = '24px "PT Mono"';
  ctx.fillText('Start game', width / 2, 300);
  ctx.font = '20px "PT Mono"';
  ctx.fillText("Press 'p' key to start game", width / 2, 400);
  ctx.fillText("'q' key to quit", width / 2, 430);
  if (fullscreen) {
    ctx.fillText("   'f' key to restore", width / 2, 460);
  } else {
    ctx.fillText("      'f' key to fullscreen", width / 2, 460);
  }
}

function renderStats(ctx: CanvasRenderingContext2D) {
  ctx.fillStyle = '#282a35';
  ctx.textAlign = 'left';
  ctx.font = '16px "PT Mono"';
  ctx.fillText('Press <- -> key to move tent.', 20, 40);
  ctx.fillText("Press 'Shift' key to fire bullets to hit the aliens.", 20, 60);
  ctx.fillText("Press 'q' key to quit game", 20, 80);
  ctx.fillText(
    `Time: ${Math.round((Date.now() - startTime) / 1000)}s`,
    20,
    110
  );
  ctx.fillText(`Score: ${score}`, 20, 130);
  ctx.fillText(`Lives: ${$GLOBALS.LIVES}`, 20, 150);
}

let gameRunning = false;
function stopLoop() {
  gameRunning = false;
}
async function startLoop() {
  gameRunning = true;

  while (await nextFrame()) {
    if (!gameRunning) break;

    handleKeyPress();
    updateScene();
    renderScene();
  }
}

let lastKey = $state<string | undefined>(undefined);
function onKeyDown(event: KeyboardEvent) {
  lastKey = event.key;
}

$effect(() => {
  if (gameOver) cleanup();
});

onMount(() => {
  resetGame();
  startLoop();
  document.addEventListener('keydown', onKeyDown, false);

  return () => {
    stopLoop();
    document.removeEventListener('keydown', onKeyDown, false);
    cleanup();
    hero.destroy();
  };
});
</script>

<svelte:window bind:innerHeight={windowHeight} bind:innerWidth={windowWidth} />

<canvas class:fullscreen bind:this={canvas} {width} {height}></canvas>

<style>
  .fullscreen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 5;
  }
</style>
