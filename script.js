const envelope = document.querySelector(".envelope");
const openingScreen = document.querySelector(".opening-screen");
const mainInvitation = document.querySelector(".main-invitation");

envelope.addEventListener("click", function () {

    // Prevent clicking the envelope multiple times
    envelope.style.pointerEvents = "none";

    // Open the envelope
    envelope.classList.add("open");

    // Wait for the envelope animation
    setTimeout(function () {

        // Completely remove the opening screen
        openingScreen.remove();

        // Reset the page position
        window.scrollTo(0, 0);

        // Show the main invitation FIRST
        mainInvitation.style.display = "block";

        // Make sure the browser recalculates the layout
        mainInvitation.offsetHeight;

    }, 1500);

});


// ===============================
// BIRTHDAY MUSIC PLAYER
// ===============================

const music = document.getElementById("birthdayMusic");
const playButton = document.getElementById("playButton");

if (playButton && music) {

    playButton.addEventListener("click", () => {

        if (music.paused) {

            music.play();
            playButton.textContent = "❚❚";

        } else {

            music.pause();
            playButton.textContent = "▶";

        }

    });

}