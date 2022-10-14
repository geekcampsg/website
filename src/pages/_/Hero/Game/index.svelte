<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';
  import * as knobby from 'svelte-knobby';
  import Alien from './Alien';
  import Bullet from './Bullet';
  import type GameObject from './GameObject';
  import Hero from './Hero';
  import { getRandom } from './utils';

  let canvas: HTMLCanvasElement;
  const dispatch = createEventDispatcher();

  const LOCALSTORAGE_KEY = 'geekcamp:shooter';
  const INITIAL_ALIEN_SPAWN_PERIOD = 3_000; // 3s
  const INITIAL_LIVES = 5;
  const INITIAL_WIDTH = 750;
  const INITIAL_HEIGHT = 600;
  let fullscreen = false;
  $: width = fullscreen ? windowWidth : INITIAL_WIDTH;
  $: height = fullscreen ? windowHeight : INITIAL_HEIGHT;
  let windowHeight: number;
  let windowWidth: number;

  const GLOBALS = knobby.panel({
    ALIEN_SPAWN_PERIOD: {
      value: INITIAL_ALIEN_SPAWN_PERIOD,
      min: 0,
      max: 10000,
      step: 1,
    },
    LIVES: {
      value: INITIAL_LIVES,
      min: 0,
      max: 10000,
      step: 1,
    },
    MAX_SPEED: {
      value: 30,
      min: 0,
      max: 100,
      step: 0.1,
    },
    MAX_ACCELERATION: {
      value: 5,
      min: 0,
      max: 100,
      step: 0.1,
    },
    ACCELERATION: {
      value: 1.75,
      min: 0,
      max: 100,
      step: 0.01,
    },
    FRICTION: {
      value: 0.9,
      min: 0,
      max: 1,
      step: 0.001,
    },
    BULLET_COUNT: {
      value: 1,
      min: 1,
      max: 100,
      step: 1,
    },
  });
  knobby.toggle(false);

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
    dispatch: (event: string, data: any) => {
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

  const aliens: Alien[] = [];
  const bullets: Bullet[] = [];
  const hero = new Hero(game);
  let score = 0;
  let startTime = 0;
  let endTime = 0;
  let gameOver = true;
  let highscore =
    JSON.parse(window.localStorage.getItem(LOCALSTORAGE_KEY) || '{}')
      .highscore || 0;
  let nextAlienSpawn: number;
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
    aliens.forEach((alien) => alien.destroy());
    aliens.splice(0, aliens.length);
    bullets.forEach((bullet) => bullet.destroy());
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
          dispatch('quit');
          knobby.toggle(false);
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
          window.localStorage.setItem(
            LOCALSTORAGE_KEY,
            JSON.stringify(gameData)
          );
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
    ctx.fillText(
      "Press 'Shift' key to fire bullets to hit the aliens.",
      20,
      60
    );
    ctx.fillText("Press 'q' key to quit game", 20, 80);
    ctx.fillText(
      'Time: ' + Math.round((Date.now() - startTime) / 1000) + 's',
      20,
      110
    );
    ctx.fillText('Score: ' + score, 20, 130);
    ctx.fillText('Lives: ' + $GLOBALS.LIVES, 20, 150);
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

  // Up, Up, Down, Down, Left, Right, Left, Right, B, A
  const cheatCode = [
    'arrowup',
    'arrowdown',
    'arrowup',
    'arrowdown',
    'arrowleft',
    'arrowright',
    'arrowleft',
    'arrowright',
    'a',
    'b',
  ];
  let konamiState = 0;
  function checkKonamiCode(key: string) {
    if (key.toLowerCase() === cheatCode[konamiState]) {
      if (++konamiState === cheatCode.length) {
        knobby.toggle(true);
        konamiState = 0;
      }
    } else {
      konamiState = 0;
    }
  }
  let lastKey: string | undefined;
  function onKeyDown(event: KeyboardEvent) {
    lastKey = event.key;
    checkKonamiCode(lastKey);
  }

  $: if (gameOver) cleanup();

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

<canvas class:fullscreen bind:this={canvas} {width} {height} />

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
