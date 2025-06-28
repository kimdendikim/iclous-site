// Эффект загрузки интерфейса
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.pointerEvents = "none";
  }, 1500);
});

// Аудиоэффекты
const hoverSound = document.getElementById("hoverSound");
const clickSound = document.getElementById("clickSound");

document.querySelectorAll(".btn-glass").forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    if (hoverSound) hoverSound.play();
  });
  btn.addEventListener("click", () => {
    if (clickSound) clickSound.play();
  });
});

// Звёздное небо (Canvas)
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

let stars = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  createStars();
}

function createStars() {
  stars = [];
  for (let i = 0; i < 200; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.5,
      speed: Math.random() * 0.5 + 0.2,
    });
  }
}

function animateStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  stars.forEach(star => {
    star.y += star.speed;
    if (star.y > canvas.height) star.y = 0;
    ctx.fillStyle = "#00ffcc";
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
    ctx.fill();
  });
  requestAnimationFrame(animateStars);
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();
animateStars();
