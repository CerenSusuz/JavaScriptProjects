let activeLight = 0;
const circles = document.querySelectorAll('.circle')

function changeLight() {
    circles[activeLight].className = 'circle';
    activeLight++;

    if (activeLight > 2) {
        activeLight = 0;
    }

    const currentLight = circles[activeLight]
    currentLight.classList.add(currentLight.getAttribute('color'));
}

setInterval(() => {
    changeLight();
}, 1000);