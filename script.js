
    const canvas = document.getElementById('fundoAnimado');
    const ctx = canvas.getContext('2d');
    let width, height;

    function resize() {
        width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}

    window.addEventListener('resize', resize);
    resize();

    const bolas = Array.from({length: 80 }, () => ({
        x: Math.random() * width,
    y: Math.random() * height,
    r: Math.random() * 3 + 1,
    dx: (Math.random() - 0.5) * 0.5,
    dy: Math.random() * 1 + 0.2,
    alpha: Math.random() * 0.5 + 0.3
}));

    function desenha() {
        ctx.clearRect(0, 0, width, height);
    bolas.forEach(bola => {
        ctx.beginPath();
    ctx.arc(bola.x, bola.y, bola.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 182, 193, ${bola.alpha})`;
    ctx.fill();

    bola.x += bola.dx;
    bola.y += bola.dy;

    if (bola.y > height) bola.y = -10;
    if (bola.x > width || bola.x < 0) bola.dx *= -1;
});

    requestAnimationFrame(desenha);
}

    desenha();
