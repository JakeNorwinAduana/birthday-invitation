const envelope = document.querySelector(".envelope");
const openingScreen = document.querySelector(".opening-screen");
const mainInvitation = document.querySelector(".main-invitation");

envelope.addEventListener("click", function () {

    // Open envelope
    envelope.classList.add("open");

    // Wait for envelope animation
    setTimeout(function () {

        // Hide opening screen
        openingScreen.classList.add("hide");

        // Show main invitation
        mainInvitation.style.display = "block";

        // Scroll to the top of the invitation
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 1500);

});

const music = document.getElementById("birthdayMusic");
const playButton = document.getElementById("playButton");

playButton.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        playButton.textContent = "❚❚";
    } else {
        music.pause();
        playButton.textContent = "▶";
    }
});