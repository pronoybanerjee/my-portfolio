const canvas = document.getElementById('backgroundCanvas');
const ctx = canvas.getContext('2d');

function resize() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}
window.addEventListener('resize', resize);
resize();

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  const size = Math.random() * 2 + 1;
  ctx.fillStyle = 'rgba(160, 200, 220, 0.4)';
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fill();
  requestAnimationFrame(draw);
}
draw();