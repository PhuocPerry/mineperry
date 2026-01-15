const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursor-follower');

window.addEventListener("mousemove", e => {
    if (window.innerWidth <= 1024) return;

    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';

    follower.animate(
        { left: `${e.clientX - 20}px`, top: `${e.clientY - 20}px` },
        { duration: 500, fill: "forwards" }
    );
});
