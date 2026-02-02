const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursor-follower');

window.addEventListener("mousemove", e => {
    if (window.innerWidth <= 1024) return;

    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';

    follower.style.left = `${e.clientX - 20}px`;
    follower.style.top = `${e.clientY - 20}px`;
});
