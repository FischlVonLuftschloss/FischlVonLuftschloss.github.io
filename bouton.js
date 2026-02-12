const btn = document.querySelector(".no");

const threshold = 130;
const force = 0.8;

document.addEventListener("mousemove", (e) => {

    const rect = btn.getBoundingClientRect();

    const bx = rect.left + rect.width / 2;
    const by = rect.top + rect.height / 2;

    const dx = e.clientX - bx;
    const dy = e.clientY - by;

    const distance = Math.hypot(dx, dy);

    if (distance < threshold) {

        const angle = Math.atan2(dy, dx);
        const move = (threshold - distance) * force;

        const x = -Math.cos(angle) * move;
        const y = -Math.sin(angle) * move;

        btn.style.transform = `translate(${x}px, ${y}px)`;
    } 
    else {
        btn.style.transform = "translate(0,0)";
    }
});