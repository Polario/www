// Radar Sweep
const canvas = document.getElementById('radar');
const ctx = canvas.getContext('2d');
canvas.width = 250;
canvas.height = 250;

let angle = 0;

function drawRadar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Radar Circle
    ctx.beginPath();
    ctx.arc(125, 125, 120, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(0, 255, 204, 0.3)';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Sweep Line
    ctx.beginPath();
    ctx.moveTo(125, 125);
    const x = 125 + Math.cos(angle) * 120;
    const y = 125 + Math.sin(angle) * 120;
    ctx.lineTo(x, y);
    ctx.strokeStyle = '#00ffcc';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Blips (random targets)
    for (let i = 0; i < 3; i++) {
        const blipAngle = Math.random() * Math.PI * 2;
        const blipDist = Math.random() * 100;
        ctx.beginPath();
        ctx.arc(
            125 + Math.cos(blipAngle) * blipDist,
            125 + Math.sin(blipAngle) * blipDist,
            3,
            0,
            Math.PI * 2
        );
        ctx.fillStyle = '#ffcc00';
        ctx.fill();
    }

    angle += 0.05;
    if (angle > Math.PI * 2) angle = 0;

    requestAnimationFrame(drawRadar);
}

drawRadar();

// Throttle Control
const throttle = document.getElementById('throttle');
const throttleValue = document.getElementById('throttle-value');

throttle.addEventListener('input', () => {
    throttleValue.textContent = `${throttle.value}%`;
});
