/* =========================
   ENVELOPE + MUSIC
========================= */

const envelope =
    document.getElementById("envelope");

const openingScreen =
    document.getElementById("openingScreen");

const backgroundMusic =
    document.getElementById("backgroundMusic");


envelope.addEventListener("click", () => {

    envelope.classList.add("open");

    /* Start music */
    backgroundMusic.volume = 0.55;

    const playMusic =
        backgroundMusic.play();

    if (playMusic !== undefined) {

        playMusic.catch((error) => {

            console.log(
                "Music playback was blocked:",
                error
            );

        });

    }

    /* Hide opening screen */
    setTimeout(() => {

        openingScreen.classList.add("hidden");

    }, 1000);

});


/* =========================
   COUNTDOWN
========================= */

const targetDate =
    new Date(
        "2026-10-17T10:00:00+08:00"
    ).getTime();


function updateCountdown() {

    const now =
        new Date().getTime();

    const difference =
        targetDate - now;


    if (difference <= 0) {

        document.getElementById("days").textContent = "0";
        document.getElementById("hours").textContent = "0";
        document.getElementById("minutes").textContent = "0";
        document.getElementById("seconds").textContent = "0";

        return;
    }


    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (difference %
                (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );


    const minutes =
        Math.floor(
            (difference %
                (1000 * 60 * 60)) /
            (1000 * 60)
        );


    const seconds =
        Math.floor(
            (difference %
                (1000 * 60)) /
            1000
        );


    document.getElementById("days").textContent =
        days;

    document.getElementById("hours").textContent =
        hours;

    document.getElementById("minutes").textContent =
        minutes;

    document.getElementById("seconds").textContent =
        seconds;
}


updateCountdown();

setInterval(
    updateCountdown,
    1000
);