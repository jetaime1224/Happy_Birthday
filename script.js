// Typing Effect
const text = "🎉 Happy Birthday My Love ❤️";
let i = 0;
function typingEffect() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typingEffect, 100);
    }
}
typingEffect();

// Cake Cut
function cutCake() {
    document.getElementById("cakeMessage").innerHTML =
        "🍰 Cake Cut! May your life be full of love & happiness ❤️";
    document.querySelector(".candle").style.display = "none";
}

// Music Control
function toggleMusic() {
    const music = document.getElementById("bgMusic");
    music.paused ? music.play() : music.pause();
}

// Auto Play After Click
document.body.addEventListener("click", function () {
    document.getElementById("bgMusic").play();
}, { once: true });

// Fireworks
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particles = [];

function startFireworks() {
    for (let i = 0; i < 150; i++) {
        particles.push({
            x: canvas.width / 2,
            y: canvas.height / 2,
            radius: Math.random() * 3,
            color: `hsl(${Math.random() * 360},100%,50%)`,
            speedX: (Math.random() - 0.5) * 10,
            speedY: (Math.random() - 0.5) * 10
        });
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p, index) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.radius *= 0.96;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        if (p.radius < 0.3) particles.splice(index, 1);
    });
    requestAnimationFrame(animate);
}
animate();

// Slideshow
let images = [
    "https://picsum.photos/400/300?1",
    "https://picsum.photos/400/300?2",
    "https://picsum.photos/400/300?3"
];

let slideIndex = 0;
setInterval(() => {
    slideIndex = (slideIndex + 1) % images.length;
    document.getElementById("slide").src = images[slideIndex];
}, 3000);
