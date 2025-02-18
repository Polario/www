// Radar sweep effect on canvas
const canvas = document.getElementById('radar');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let angle = 0;

function drawRadar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw radar circle
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, 200, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(0, 212, 255, 0.2)';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw sweeping line
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, canvas.height / 2);
    const x = canvas.width / 2 + Math.cos(angle) * 200;
    const y = canvas.height / 2 + Math.sin(angle) * 200;
    ctx.lineTo(x, y);
    ctx.strokeStyle = 'rgba(0, 212, 255, 0.5)';
    ctx.lineWidth = 4;
    ctx.stroke();

    angle += 0.05;
    if (angle > Math.PI * 2) angle = 0;

    requestAnimationFrame(drawRadar);
}

drawRadar();

// Button hover effect
const engageBtn = document.getElementById('engage');
engageBtn.addEventListener('mouseover', () => {
    engageBtn.style.background = '#00d4ff';
});
engageBtn.addEventListener('mouseout', () => {
    engageBtn.style.background = '#ff9500';
});
