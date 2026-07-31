const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener("resize", resize);
resize();

const dots = [];
const DOT_COUNT = 35;

for (let i = 0; i < DOT_COUNT; i++) {

    dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,

        r: Math.random() * 2.5 + 0.8,

        dx: (Math.random() - 0.5) * 0.9,
        dy: (Math.random() - 0.5) * 0.9
    });

}

function drawDot(dot) {

    const gradient = ctx.createRadialGradient(
        dot.x,
        dot.y,
        0,
        dot.x,
        dot.y,
        dot.r * 12
    );

    gradient.addColorStop(0, "rgba(56,189,248,0.35)");
    gradient.addColorStop(0.4, "rgba(56,189,248,0.12)");
    gradient.addColorStop(1, "rgba(56,189,248,0)");

    ctx.beginPath();
    ctx.fillStyle = gradient;
    ctx.arc(dot.x, dot.y, dot.r * 12, 0, Math.PI * 2);
    ctx.fill();

}

function animate() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const dot of dots) {

        dot.x += dot.dx;
        dot.y += dot.dy;

        if (dot.x < -50) dot.x = canvas.width + 50;
        if (dot.x > canvas.width + 50) dot.x = -50;

        if (dot.y < -50) dot.y = canvas.height + 50;
        if (dot.y > canvas.height + 50) dot.y = -50;

        drawDot(dot);

    }

    requestAnimationFrame(animate);

}

animate();