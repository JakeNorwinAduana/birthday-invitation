document.addEventListener("DOMContentLoaded", function () {
    setupEnvelope();
    startCountdown();
});


/* =========================================
   ENVELOPE
========================================= */

function setupEnvelope() {

    const envelope = document.getElementById("envelope");
    const openingScreen = document.getElementById("openingScreen");
    const mainInvitation = document.getElementById("mainInvitation");

    if (!envelope || !openingScreen || !mainInvitation) {
        return;
    }

    envelope.addEventListener("click", function () {

        if (envelope.classList.contains("open")) {
            return;
        }

        envelope.style.pointerEvents = "none";

        envelope.classList.add("open");


        setTimeout(function () {

            mainInvitation.classList.add("show");

            openingScreen.classList.add("hide");

        }, 1200);


        setTimeout(function () {

            openingScreen.remove();

            window.scrollTo({
                top: 0,
                behavior: "instant"
            });

        }, 2200);

    });
}


/* =========================================
   COUNTDOWN
========================================= */

function startCountdown() {

    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    if (
        !daysElement ||
        !hoursElement ||
        !minutesElement ||
        !secondsElement
    ) {
        return;
    }


    const targetDate =
        new Date("2026-10-17T10:00:00+08:00");


    function updateCountdown() {

        const now = new Date();

        let difference =
            targetDate.getTime() - now.getTime();


        if (difference < 0) {
            difference = 0;
        }


        const days =
            Math.floor(
                difference / (1000 * 60 * 60 * 24)
            );


        const hours =
            Math.floor(
                (difference / (1000 * 60 * 60)) % 24
            );


        const minutes =
            Math.floor(
                (difference / (1000 * 60)) % 60
            );


        const seconds =
            Math.floor(
                (difference / 1000) % 60
            );


        daysElement.textContent =
            String(days).padStart(2, "0");

        hoursElement.textContent =
            String(hours).padStart(2, "0");

        minutesElement.textContent =
            String(minutes).padStart(2, "0");

        secondsElement.textContent =
            String(seconds).padStart(2, "0");
    }


    updateCountdown();

    setInterval(updateCountdown, 1000);
}