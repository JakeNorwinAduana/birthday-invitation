document.addEventListener("DOMContentLoaded", () => {

    setupEnvelope();
    startCountdown();

});


/* ================================================= */
/* ENVELOPE */
/* ================================================= */

function setupEnvelope() {

    const envelope = document.getElementById("envelope");
    const openingScreen = document.getElementById("openingScreen");

    if (!envelope || !openingScreen) return;


    envelope.addEventListener("click", () => {

        if (envelope.classList.contains("open")) {
            return;
        }


        envelope.classList.add("open");


        setTimeout(() => {

            document.body.style.overflowY = "auto";

        }, 500);


        setTimeout(() => {

            openingScreen.classList.add("hidden");

        }, 1200);

    });

}


/* ================================================= */
/* COUNTDOWN */
/* ================================================= */

function startCountdown() {

    const targetDate = new Date(
        "2026-10-17T10:00:00+08:00"
    ).getTime();


    function updateCountdown() {

        const now = new Date().getTime();

        const difference = targetDate - now;


        const daysElement =
            document.getElementById("days");

        const hoursElement =
            document.getElementById("hours");

        const minutesElement =
            document.getElementById("minutes");

        const secondsElement =
            document.getElementById("seconds");


        if (
            !daysElement ||
            !hoursElement ||
            !minutesElement ||
            !secondsElement
        ) {
            return;
        }


        if (difference <= 0) {

            daysElement.textContent = "00";
            hoursElement.textContent = "00";
            minutesElement.textContent = "00";
            secondsElement.textContent = "00";

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