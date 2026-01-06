const startBtn = document.getElementById("startBtn");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");

let score = 0;
let gameRunning = false;
let spawnInterval;

const emojis = ["💗", "🌸", "🤣", "✨", "💖"];

startBtn.addEventListener("click", startGame);

function startGame() {
  if (gameRunning) return;

  gameRunning = true;
  score = 0;
  scoreEl.innerText = "Score: 0";
  text.innerText = "Tangkap emoji secepat mungkin! 😳";
  startBtn.style.display = "none";

  spawnInterval = setInterval(spawnEmoji, 700);

  setTimeout(endGame, 15000); // 15 detik
}

function spawnEmoji() {
  const emoji = document.createElement("div");
  emoji.className = "emoji";
  emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];

  emoji.style.left = Math.random() * (window.innerWidth - 40) + "px";
  emoji.style.top = "-40px";

  document.body.appendChild(emoji);

  let top = -40;
  const fall = setInterval(() => {
    top += 4;
    emoji.style.top = top + "px";

    if (top > window.innerHeight) {
      clearInterval(fall);
      emoji.remove();
    }
  }, 20);

  function catchEmoji() {
    score++;
    scoreEl.innerText = "Score: " + score;
    text.innerText = randomText();
    clearInterval(fall);
    emoji.remove();
  }

  // SUPPORT CLICK & TAP
  emoji.addEventListener("click", catchEmoji);
  emoji.addEventListener("touchstart", catchEmoji);
}

function endGame() {
  clearInterval(spawnInterval);
  gameRunning = false;

  text.innerText = Game selesai 😆 Skormu: ${score} 💗;
  showConfetti();
}

function randomText() {
  const texts = [
    "lelet kali mmng 😳",
    "puger puger😆",
    "Awas gila😏",
    "kuat2 ldr nya 💖"
  ];
  return texts[Math.floor(Math.random() * texts.length)];
}

function showConfetti() {
  for (let i = 0; i < 25; i++) {
    const c = document.createElement("div");
    c.innerText = "💗";
    c.style.position = "absolute";
    c.style.left = Math.random() * 100 + "vw";
    c.style.top = "-30px";
    c.style.fontSize = "24px";
    document.body.appendChild(c);

    let top = -30;
    const fall = setInterval(() => {
      top += 5;
      c.style.top = top + "px";
      if (top > window.innerHeight) {
        clearInterval(fall);
        c.remove();
      }
    }, 20);
  }
}
