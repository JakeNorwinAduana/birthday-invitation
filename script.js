/* ================================================= */
/* ENVELOPE */
/* ================================================= */

const envelope = document.getElementById("envelope");
const openingScreen = document.getElementById("openingScreen");
const backgroundMusic = document.getElementById("backgroundMusic");


envelope.addEventListener("click", () => {

    /* Open the envelope */
    envelope.classList.add("open");


    /* Start the background music */
    backgroundMusic.volume = 0.55;

    const playMusic = backgroundMusic.play();

    if (playMusic !== undefined) {

        playMusic.catch((error) => {

            console.log(
                "Music playback was blocked:",
                error
            );

        });

    }


    /* Hide the opening screen */
    setTimeout(() => {

        openingScreen.classList.add("hidden");

    }, 1000);

});


/* ================================================= */
/* COUNTDOWN */
/* ================================================= */

const targetDate = new Date(
    "2026-10-17T10:00:00+08:00"
).getTime();


function updateCountdown() {

    const now = new Date().getTime();

    const difference = targetDate - now;


    if (difference <= 0) {

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        return;
    }


    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );


    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );


    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );


    const seconds = Math.floor(
        (difference / 1000) % 60
    );


    document.getElementById("days").textContent =
        String(days).padStart(2, "0");


    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");


    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");


    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");

}


updateCountdown();

setInterval(updateCountdown, 1000);