const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const colors = ["#ff69b4", "#ff1493", "#ff00ff", "#ff66cc"];

function createParticle(x, y) {
  const angle = Math.random() * 2 * Math.PI;
  const speed = Math.random() * 2;
  const size = Math.random() * 3 + 1;
  return {
    x,
    y,
    dx: Math.cos(angle) * speed,
    dy: Math.sin(angle) * speed,
    size,
    color: colors[Math.floor(Math.random() * colors.length)],
    life: 100
  };
}

function drawHeart(cx, cy, size, time) {
  ctx.beginPath();
  for (let t = 0; t <= Math.PI * 2; t += 0.01) {
    const x = size * 16 * Math.pow(Math.sin(t), 3);
    const y = -size * (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
    ctx.fillStyle = "#ff0077";
    ctx.fillRect(cx + x, cy + y, 2, 2);
  }
}

function animate() {
  ctx.fillStyle = "rgba(0,0,0,0.2)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;

  drawHeart(centerX, centerY - 100, 10, Date.now());

  if (particles.length < 500) {
    for (let i = 0; i < 5; i++) {
      particles.push(createParticle(centerX, centerY - 100));
    }
  }

  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();
    p.x += p.dx;
    p.y += p.dy;
    p.life--;

    if (p.life <= 0) {
      particles.splice(i, 1);
    }
  }

  requestAnimationFrame(animate);
}

animate();































// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// const particles = [];
// const colors = ["#ff69b4", "#ff1493", "#ff00ff", "#ff66cc"];

// function createParticle(x, y) {
//   const angle = Math.random() * 2 * Math.PI;
//   const speed = Math.random() * 2;
//   const size = Math.random() * 3 + 1;
//   return {
//     x,
//     y,
//     dx: Math.cos(angle) * speed,
//     dy: Math.sin(angle) * speed,
//     size,
//     color: colors[Math.floor(Math.random() * colors.length)],
//     life: 100
//   };
// }

// function drawHeart(cx, cy, size) {
//   ctx.beginPath();
//   for (let t = 0; t <= Math.PI * 2; t += 0.01) {
//     const x = size * 16 * Math.pow(Math.sin(t), 3);
//     const y = -size * (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
//     ctx.fillStyle = "#ff0077";
//     ctx.fillRect(cx + x, cy + y, 2, 2);
//   }
// }

// function animate() {
//   ctx.fillStyle = "rgba(0,0,0,0.2)";
//   ctx.fillRect(0, 0, canvas.width, canvas.height);

//   const centerX = canvas.width / 2;
//   const centerY = canvas.height / 2 - 100;

//   drawHeart(centerX, centerY, 10);

//   if (particles.length < 500) {
//     for (let i = 0; i < 5; i++) {
//       particles.push(createParticle(centerX, centerY));
//     }
//   }

//   for (let i = particles.length - 1; i >= 0; i--) {
//     const p = particles[i];
//     ctx.beginPath();
//     ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
//     ctx.fillStyle = p.color;
//     ctx.fill();
//     p.x += p.dx;
//     p.y += p.dy;
//     p.life--;

//     if (p.life <= 0) {
//       particles.splice(i, 1);
//     }
//   }

//   requestAnimationFrame(animate);
// }

// animate();
