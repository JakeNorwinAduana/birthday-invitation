const envelope = document.querySelector(".envelope");
const openingScreen = document.querySelector(".opening-screen");
const mainInvitation = document.querySelector(".main-invitation");

envelope.addEventListener("click", function () {

    // Open envelope
    envelope.classList.add("open");

    // Wait for the envelope opening animation to finish
    setTimeout(function () {

        // Show the main invitation
        mainInvitation.style.display = "block";

        // Completely remove the opening screen
        openingScreen.style.display = "none";

        // Start the invitation at the top
        window.scrollTo({
            top: 0,
            behavior: "instant"
        });

    }, 1500);

});


// ===============================
// BIRTHDAY MUSIC PLAYER
// ===============================

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