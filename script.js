alert("JS TERLOAD");
const startBtn = document.getElementById("startBtn");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const sound = document.getElementById("sound");
let score = 0;
let gameInterval;

const emojis = ["💗","🌸","🫣","🤣","💖","✨"];

startBtn.addEventListener("click", startGame);

function startGame() {
  startBtn.style.display = "none";
  text.innerText = "Tangkap emoji yang muncul! 😳";
  score = 0;
  scoreEl.innerText = "Score: 0";

  // spawn emoji setiap 0.7 detik
  gameInterval = setInterval(spawnEmoji, 700);

  // game selesai setelah 15 detik
  setTimeout(endGame, 15000);
}

function spawnEmoji() {
  const emoji = document.createElement("div");
  emoji.className = "emoji";
  emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];

  // posisi awal acak
  emoji.style.left = Math.random() * (window.innerWidth - 50) + "px";
  emoji.style.top = "-50px";
  emoji.style.fontSize = Math.random() * 30 + 25 + "px";

  document.body.appendChild(emoji);

  // gerak jatuh
  let topPos = -50;
  const fall = setInterval(() => {
    topPos += 4;
    emoji.style.top = topPos + "px";

    if(topPos > window.innerHeight) {
      clearInterval(fall);
      emoji.remove();
    }
  }, 20);

  // klik/tap emoji
  emoji.addEventListener("click", emojiClicked);
  emoji.addEventListener("touchstart", emojiClicked);

  function emojiClicked() {
    score++;
    scoreEl.innerText = "Score: " + score;
    randomMessage();
    emoji.remove();
    clearInterval(fall);
    if(sound) sound.play();
  }
}

// pesan lucu tiap klik emoji
function randomMessage() {
  const messages = [
    "lelett kali laa😳",
    "tapii da mantapp",
    "Lucu ya 😆",
    "Awas gilakk"
  ];
  text.innerText = messages[Math.floor(Math.random() * messages.length)];
}

// akhir game
function endGame() {
  clearInterval(gameInterval);
  text.innerText = Game selesai! Skormu: ${score} 💖;
  confetti();
  finalMessage();
}

// pesan akhir manis + confetti
function finalMessage() {
  const finalMsgs = [
    "Kau menang Tapi tetep lanjut yaa😳",
    "kurang2i keluar malam pyutt",
    "tahun baru harus jadi kepribadian baruu"
  ];
  text.innerText = finalMsgs[Math.floor(Math.random() * finalMsgs.length)];
}

// confetti emoji hati jatuh
function confetti() {
  for(let i=0; i<30; i++){
    const e = document.createElement("div");
    e.innerText = ["💗","🌸","✨"][Math.floor(Math.random()*3)];
    e.style.position = "absolute";
    e.style.left = Math.random()*100 + "vw";
    e.style.top = "-50px";
    e.style.fontSize = Math.random()*30 + 20 + "px";
    document.body.appendChild(e);

    let top = -50;
    const fall = setInterval(() => {
      top += 5;
      e.style.top = top + "px";
      if(top > window.innerHeight) {
        clearInterval(fall);
        e.remove();
      }
    },20);
  }
}
