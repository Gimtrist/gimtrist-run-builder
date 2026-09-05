// Ping vs Pong Responsive v2
const canvas = document.getElementById('pongCanvas');
const ctx = canvas.getContext('2d');
const scoreBoard = document.getElementById('scoreBoard');
const restartBtn = document.getElementById('restartBtn');
const muteBtn = document.getElementById('muteBtn');
const overlay = document.getElementById('overlay');
const overlayTitle = document.getElementById('overlayTitle');
const overlayMsg = document.getElementById('overlayMsg');
const overlayBtn = document.getElementById('overlayBtn');

// Ping vs Pong color palette
const PP_ACCENT = "#00d4ff";
const PP_WHITE = "#ffffff";

// Game base constants (based on 960x540 canvas)
const BASE_W = 960;
const BASE_H = 540;
const BASE_PADDLE_W = 13;
const BASE_PADDLE_H = 100;
const BASE_PADDLE_MARGIN = 18;
const BASE_BALL_SIZE = 18;
const BASE_BALL_SPEED = 7.3;
const BASE_AI_SPEED = 5.2;
const MIN_BALL_VEL_Y = 2.5;

let scale = 1; // scale factor for all elements
function calculateScale() {
  scale = canvas.width / BASE_W;
}

// State
let playerScore = 0;
let aiScore = 0;
let difficulty = localStorage.getItem('pingPongDifficulty') || 'medium';
let highScore = parseInt(localStorage.getItem('pingPongHighScore') || '0', 10);

const DIFFICULTY_MULTIPLIER = { easy: 0.6, medium: 1.0, hard: 1.5 };
const DIFFICULTY_INACCURACY = { easy: 40, medium: 0, hard: 0 };

let leftPaddleY, rightPaddleY, ballX, ballY, ballVelX, ballVelY;
let animationId = null;
let isRunning = false;
let isPaused = false;

// Controls
let keyUp = false, keyDown = false;
let keyW = false, keyS = false;

// Sound
let muted = JSON.parse(localStorage.getItem('pingPongMuted') || 'false');
const sounds = {
  hit: makeBeep(220, 0.11, 0.13),
  score: makeBeep(600, 0.23, 0.25),
  start: makeBeep(170, 0.13, 0.15),
  win: makeBeep(440, 0.25, 0.3),
  countdown: makeBeep(400, 0.06, 0.08),
  countdownGo: makeBeep(800, 0.14, 0.15)
};
function playSound(name) {
  if (!muted && sounds[name]) {
    sounds[name]();
  }
}
muteBtn.innerText = muted ? "🔇" : "🔊";
muteBtn.setAttribute('aria-label', muted ? "Enable sound" : "Mute sound");

// Responsive canvas + scaler
function resizeCanvas() {
  // max 820px, min 150px, maintain aspect ratio
  let w = Math.min(820, Math.max(150, canvas.parentElement.offsetWidth));
  let h = Math.round(w * BASE_H / BASE_W);
  canvas.width = w;
  canvas.height = h;
  calculateScale();

  // Jika sedang main, paddle tetap proporsional
  if (typeof leftPaddleY === "number") {
    // sesuaikan posisi paddle & bola berdasarkan skala lama ke baru
    leftPaddleY = leftPaddleY * (canvas.height / BASE_H);
    rightPaddleY = rightPaddleY * (canvas.height / BASE_H);
    ballX = ballX * (canvas.width / BASE_W);
    ballY = ballY * (canvas.height / BASE_H);
  }
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// --- Overlay Management ---
function showOverlay(title, msg, btnText, focusBtn = true) {
  clearTimeout(countdownTimer);
  overlayTitle.textContent = title;
  overlayMsg.innerHTML = msg;
  overlayBtn.textContent = btnText;
  if (btnText) {
    overlayBtn.style.display = "";
  } else {
    overlayBtn.style.display = "none";
  }
  overlay.classList.remove('hidden');
  if (focusBtn && btnText) setTimeout(() => overlayBtn.focus(), 20);
}
function hideOverlay() {
  overlay.classList.add('hidden');
  clearTimeout(countdownTimer);
}

// --- Countdown Overlay ---
let countdownTimer = null;
function showCountdown(callback) {
  let count = 3;
  overlayTitle.innerHTML = "";
  overlayMsg.innerHTML = `<div class="countdown-number" id="countdownNum">${count}</div>`;
  overlayBtn.style.display = "none";
  overlay.classList.remove('hidden');
  playSound('countdown');

  function next() {
    count--;
    if (count > 0) {
      document.getElementById('countdownNum').textContent = count;
      playSound('countdown');
      countdownTimer = setTimeout(next, 700);
    } else {
      document.getElementById('countdownNum').textContent = "GO!";
      playSound('countdownGo');
      countdownTimer = setTimeout(() => {
        hideOverlay();
        overlayBtn.style.display = "";
        callback();
      }, 650);
    }
  }
  countdownTimer = setTimeout(next, 700);
}

// --- Game Logic ---
function getScaled(val) { return Math.round(val * scale); }
function initGame() {
  leftPaddleY = (canvas.height - getScaled(BASE_PADDLE_H)) / 2;
  rightPaddleY = (canvas.height - getScaled(BASE_PADDLE_H)) / 2;
  resetBall();
  updateScore();
}

function updateScore(animated = false) {
  if (playerScore > highScore) {
    highScore = playerScore;
    localStorage.setItem('pingPongHighScore', highScore);
  }
  scoreBoard.innerHTML = `${playerScore} <span class="score-sep">|</span> ${aiScore}`;
  if (animated) {
    scoreBoard.classList.add('animated');
    setTimeout(() => scoreBoard.classList.remove('animated'), 400);
  }
}

function resetBall(lastScorer = null) {
  ballX = (canvas.width - getScaled(BASE_BALL_SIZE)) / 2;
  ballY = (canvas.height - getScaled(BASE_BALL_SIZE)) / 2;
  // Ball moves towards the last scorer's opponent
  let speed = getScaled(BASE_BALL_SPEED);
  ballVelX = speed * (lastScorer === "player" ? -1 : 1) * (Math.random() > 0.5 ? 1 : -1);
  ballVelY = speed * (Math.random() * 2 - 1);
  // Prevent near-horizontal angles that make ball stall
  if (Math.abs(ballVelY) < getScaled(MIN_BALL_VEL_Y)) {
    ballVelY = getScaled(MIN_BALL_VEL_Y) * (Math.random() > 0.5 ? 1 : -1);
  }
}

function aiMove() {
  const target = ballY + getScaled(BASE_BALL_SIZE)/2;
  const paddleCenter = rightPaddleY + getScaled(BASE_PADDLE_H)/2;
  let aiSpeed = getScaled(BASE_AI_SPEED * DIFFICULTY_MULTIPLIER[difficulty]);
  let inaccuracy = getScaled(DIFFICULTY_INACCURACY[difficulty]);
  let adjustedTarget = target + (inaccuracy * (Math.random() > 0.5 ? 1 : -1));
  if (adjustedTarget < paddleCenter - 12*scale) {
    rightPaddleY -= aiSpeed;
  } else if (adjustedTarget > paddleCenter + 12*scale) {
    rightPaddleY += aiSpeed;
  }
  rightPaddleY = Math.max(0, Math.min(canvas.height - getScaled(BASE_PADDLE_H), rightPaddleY));
}

function update() {
  // Player control (keyboard)
  if (keyUp || keyW) leftPaddleY -= 8.5*scale;
  if (keyDown || keyS) leftPaddleY += 8.5*scale;
  leftPaddleY = Math.max(0, Math.min(canvas.height - getScaled(BASE_PADDLE_H), leftPaddleY));

  ballX += ballVelX;
  ballY += ballVelY;

  // Wall collision
  if (ballY <= 0 || ballY + getScaled(BASE_BALL_SIZE) >= canvas.height) {
    ballVelY = -ballVelY;
    ballY = ballY <= 0 ? 0 : canvas.height - getScaled(BASE_BALL_SIZE);
    playSound('hit');
  }

  // Left paddle collision
  if (
    ballX <= getScaled(BASE_PADDLE_MARGIN) + getScaled(BASE_PADDLE_W) &&
    ballY + getScaled(BASE_BALL_SIZE) >= leftPaddleY &&
    ballY <= leftPaddleY + getScaled(BASE_PADDLE_H)
  ) {
    ballVelX = Math.abs(ballVelX);
    const collidePoint = (ballY + getScaled(BASE_BALL_SIZE)/2) - (leftPaddleY + getScaled(BASE_PADDLE_H)/2);
    ballVelY = collidePoint * 0.28;
    if (Math.abs(ballVelY) < getScaled(MIN_BALL_VEL_Y)) {
      ballVelY = getScaled(MIN_BALL_VEL_Y) * (ballVelY >= 0 ? 1 : -1);
    }
    flashCanvas(PP_ACCENT);
    playSound('hit');
  }

  // Right paddle collision
  if (
    ballX + getScaled(BASE_BALL_SIZE) >= canvas.width - getScaled(BASE_PADDLE_MARGIN) - getScaled(BASE_PADDLE_W) &&
    ballY + getScaled(BASE_BALL_SIZE) >= rightPaddleY &&
    ballY <= rightPaddleY + getScaled(BASE_PADDLE_H)
  ) {
    ballVelX = -Math.abs(ballVelX);
    const collidePoint = (ballY + getScaled(BASE_BALL_SIZE)/2) - (rightPaddleY + getScaled(BASE_PADDLE_H)/2);
    ballVelY = collidePoint * 0.28;
    if (Math.abs(ballVelY) < getScaled(MIN_BALL_VEL_Y)) {
      ballVelY = getScaled(MIN_BALL_VEL_Y) * (ballVelY >= 0 ? 1 : -1);
    }
    flashCanvas(PP_ACCENT);
    playSound('hit');
  }

  // Player scores
  if (ballX > canvas.width) {
    playerScore++;
    updateScore(true);
    playSound('score');
    resetBall("player");
  }
  // AI scores
  if (ballX < 0) {
    aiScore++;
    updateScore(true);
    playSound('score');
    resetBall("ai");
  }

  aiMove();
}

let flashTimeout = null;
function flashCanvas(color) {
  // Ponytail: desain.md says no shadows/glow - flash removed
  clearTimeout(flashTimeout);
  flashTimeout = setTimeout(() => {
  }, 200);
}

function drawRect(x, y, w, h, color) {
  ctx.save();
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
  ctx.restore();
}

function drawBall(x, y, s, color) {
  ctx.save();
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x + s/2, y + s/2, s/2, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function render() {
  // Clear
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Center net
  ctx.save();
  ctx.strokeStyle = PP_WHITE;
  ctx.shadowColor = PP_ACCENT;
  ctx.shadowBlur = 8 * scale;
  ctx.beginPath();
  ctx.setLineDash([10*scale, 22*scale]);
  ctx.moveTo(canvas.width / 2, 0);
  ctx.lineTo(canvas.width / 2, canvas.height);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.restore();

  // Left Paddle (Player) - Accent Cyan
  drawRect(getScaled(BASE_PADDLE_MARGIN), leftPaddleY, getScaled(BASE_PADDLE_W), getScaled(BASE_PADDLE_H), PP_ACCENT);

  // Right Paddle (AI) - White
  drawRect(canvas.width - getScaled(BASE_PADDLE_MARGIN) - getScaled(BASE_PADDLE_W), rightPaddleY, getScaled(BASE_PADDLE_W), getScaled(BASE_PADDLE_H), PP_WHITE);

  // Ball - White
  drawBall(ballX, ballY, getScaled(BASE_BALL_SIZE), PP_WHITE);
}

function gameLoop() {
  if (!isRunning || isPaused) return;
  update();
  render();
  animationId = requestAnimationFrame(gameLoop);
}

// --- Input Events ---
// Mouse/touch untuk paddle
let isTouching = false;
canvas.addEventListener('mousemove', function(e) {
  if (!isRunning || isPaused) return;
  const rect = canvas.getBoundingClientRect();
  const mouseY = e.clientY - rect.top;
  leftPaddleY = mouseY - getScaled(BASE_PADDLE_H) / 2;
  leftPaddleY = Math.max(0, Math.min(canvas.height - getScaled(BASE_PADDLE_H), leftPaddleY));
});
canvas.addEventListener('touchstart', function(e) {
  isTouching = true;
}, {passive: false});
canvas.addEventListener('touchmove', function(e) {
  if (!isRunning || isPaused) return;
  if (!isTouching) return;
  const rect = canvas.getBoundingClientRect();
  let touch = e.touches[0];
  const touchY = touch.clientY - rect.top;
  leftPaddleY = touchY - getScaled(BASE_PADDLE_H) / 2;
  leftPaddleY = Math.max(0, Math.min(canvas.height - getScaled(BASE_PADDLE_H), leftPaddleY));
  e.preventDefault();
}, {passive: false});
canvas.addEventListener('touchend', function(e) {
  isTouching = false;
});

// Keyboard
window.addEventListener('keydown', function(e) {
  if (!isRunning || isPaused) return;
  if (e.key === 'ArrowUp') keyUp = true;
  if (e.key === 'ArrowDown') keyDown = true;
  if (e.key === 'w' || e.key === 'W') keyW = true;
  if (e.key === 's' || e.key === 'S') keyS = true;
});
window.addEventListener('keyup', function(e) {
  if (e.key === 'ArrowUp') keyUp = false;
  if (e.key === 'ArrowDown') keyDown = false;
  if (e.key === 'w' || e.key === 'W') keyW = false;
  if (e.key === 's' || e.key === 'S') keyS = false;
});

// Pause/resume on blur/focus
window.addEventListener('blur', () => {
  if (isRunning && !isPaused) {
    pauseGame();
    showOverlay("Jeda", "Permainan dijeda. Klik Lanjutkan untuk bermain lagi.", "Lanjutkan");
  }
});

// Overlay button
overlayBtn.addEventListener('click', function() {
  if (overlayBtn.textContent === "Mulai") {
    hideOverlay();
    showCountdown(() => startGame());
  } else if (overlayBtn.textContent === "Resume" || overlayBtn.textContent === "Lanjutkan") {
    hideOverlay();
    resumeGame();
  } else if (overlayBtn.textContent === "Ulangi" || overlayBtn.textContent === "Restart") {
    playerScore = 0; aiScore = 0;
    updateScore();
    hideOverlay();
    showCountdown(() => startGame());
  }
});

// Restart button
restartBtn.addEventListener('click', function() {
  pauseGame();
  showOverlay("Ulangi Game?", "Yakin ingin mengulang? Skor akan direset.<br><br>Tekan 'Ulangi' untuk konfirmasi.", "Ulangi");
});

// Mute button
muteBtn.addEventListener('click', function() {
  muted = !muted;
  localStorage.setItem('pingPongMuted', muted);
  muteBtn.innerText = muted ? "🔇" : "🔊";
  muteBtn.setAttribute('aria-label', muted ? "Enable sound" : "Mute sound");
  if (!muted) playSound('start');
});

// --- Game Loop Control ---
function pauseGame() {
  isPaused = true;
  cancelAnimationFrame(animationId);
}
function resumeGame() {
  if (isRunning && isPaused) {
    isPaused = false;
    gameLoop();
  }
}
function startGame() {
  isRunning = true;
  isPaused = false;
  playSound('start');
  initGame();
  gameLoop();
}

// --- Difficulty Selection ---
function setDifficulty(level) {
  difficulty = level;
  localStorage.setItem('pingPongDifficulty', level);
  overlayMsg.innerHTML = `<p class="accent-text">Gerakkan mouse atau sentuh layar untuk paddle kiri.</p>
  <p>Bisa juga pakai <b>W/S</b> atau <b>↑/↓</b>.</p>
  <p>Paddle kanan dikendalikan AI.</p>
  <p>Menuju 10 poin duluan menang!</p>
  <p><b>Tip:</b> Klik 🔇 untuk menonaktifkan suara.</p>
  <p class="tip-text">Skor terbaik: ${highScore}</p>`;
  overlayBtn.textContent = "Mulai";
  overlayBtn.style.display = "";
}

// --- Initial Overlay ---
showOverlay(
  "Ping vs Pong",
  `<div class="difficulty-selector">
    <button class="game-btn difficulty-btn" onclick="setDifficulty('easy')">Mudah</button>
    <button class="game-btn difficulty-btn" onclick="setDifficulty('medium')">Sedang</button>
    <button class="game-btn difficulty-btn" onclick="setDifficulty('hard')">Sulit</button>
  </div>`,
  ""
);

// --- Win Condition (First to 10) ---
function checkWin() {
  if (playerScore >= 10 || aiScore >= 10) {
    let msg, title;
    if (playerScore > aiScore) {
      title = "Kamu Menang! 🏆";
      msg = `<p>Selamat! Kamu mencapai 10 poin duluan.</p><p><b>Skor terbaik: ${highScore}</b></p><p>Main lagi?</p>`;
      playSound('win');
    } else {
      title = "AI Menang! 🤖";
      msg = `<p>AI lebih dulu 10 poin. Coba lagi?</p><p><b>Skor terbaik: ${highScore}</b></p><p>Main lagi?</p>`;
      playSound('win');
    }
    pauseGame();
    showOverlay(title, msg, "Ulangi");
    return true;
  }
  return false;
}

// --- Patch gameLoop for win check ---
function patchedGameLoop() {
  if (!isRunning || isPaused) return;
  update();
  render();
  if (!checkWin()) animationId = requestAnimationFrame(patchedGameLoop);
}
gameLoop = patchedGameLoop;

// --- Audio (Web API, no assets needed) ---
let audioCtx = null;
function getAudioContext() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return null;
    audioCtx = new AudioContext();
  }
  if (audioCtx.state === 'suspended') audioCtx.resume();
  return audioCtx;
}

function makeBeep(freq, attack, release) {
  return function() {
    const ctx = getAudioContext();
    if (!ctx) return;
    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.frequency.value = freq;
      osc.type = 'triangle';
      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.14, ctx.currentTime + attack);
      gain.gain.linearRampToValueAtTime(0, ctx.currentTime + attack + release);
      osc.connect(gain).connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + attack + release + 0.01);
    } catch (e) {}
  }
}
