const modelViewer = document.querySelector("#blockModel");

window.addEventListener("mousemove", e => {
    if (window.innerWidth <= 1024) return;

    const x = (e.clientX / window.innerWidth - 0.5) * 40;
    const y = (e.clientY / window.innerHeight - 0.5) * 40;

    modelViewer.cameraOrbit = `${x}deg ${y + 90}deg auto`;
});
