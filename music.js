const audio = new Audio("/productivity-pal/bella.mp3");
audio.loop = true;

document.getElementById("playMusicButton").addEventListener("click", function() {
    audio.play();
});

document.getElementById("pauseMusicButton").addEventListener("click", function() {
    audio.pause();
});
