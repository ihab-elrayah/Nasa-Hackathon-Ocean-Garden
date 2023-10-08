// Handling the cursor GIF movement
const cursorGif = document.getElementById('cursorGif');

document.addEventListener('mousemove', (e) => {
    cursorGif.style.top = (e.clientY - 100) + 'px';
    cursorGif.style.left = (e.clientX - 60) + 'px';
});
