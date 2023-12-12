document.addEventListener("DOMContentLoaded", function () {
    const backgroundMusic = document.getElementById("backgroundMusic");
    const toggleMusicButton = document.getElementById("toggleMusic");


    if (backgroundMusic.canPlayType) {
        toggleMusicButton.addEventListener("click", function () {
            if (backgroundMusic.paused) {
                backgroundMusic.play();
            } else {
                backgroundMusic.pause();
            }
        });
    } else {

        toggleMusicButton.style.display = "none";
    }
});
