document.addEventListener("DOMContentLoaded", () => {

    setupEnvelope();

    startCountdown();

});


// =========================================
// ENVELOPE → MAIN INVITATION
// =========================================

function setupEnvelope() {

    const envelope =
        document.getElementById("envelope");

    const openingScreen =
        document.getElementById("openingScreen");

    const mainInvitation =
        document.getElementById("mainInvitation");


    if (
        !envelope ||
        !openingScreen ||
        !mainInvitation
    ) {
        return;
    }


    envelope.addEventListener("click", () => {

        // Prevent multiple clicks
        envelope.style.pointerEvents = "none";


        // Open envelope
        envelope.classList.add("open");


        // Reveal main invitation
        setTimeout(() => {

            mainInvitation.style.display =
                "block";


            // Force browser reflow
            mainInvitation.offsetHeight;


            mainInvitation.classList.add("show");


            // Fade opening screen
            openingScreen.classList.add("hide");


            // Remove opening screen
            setTimeout(() => {

                openingScreen.remove();


                window.scrollTo({
                    top: 0,
                    behavior: "instant"
                });


            }, 1200);


        }, 1200);

    });

}


// =========================================
// COUNTDOWN
// =========================================

function startCountdown() {

    const daysEl =
        document.getElementById("days");

    const hoursEl =
        document.getElementById("hours");

    const minutesEl =
        document.getElementById("minutes");

    const secondsEl =
        document.getElementById("seconds");


    if (
        !daysEl ||
        !hoursEl ||
        !minutesEl ||
        !secondsEl
    ) {
        return;
    }


    /*
        Event:

        October 17, 2026
        10:00 AM
        Philippine Time (UTC+8)
    */

    const targetDate =
        new Date(
            "2026-10-17T10:00:00+08:00"
        ).getTime();


    function pad(number) {

        return String(number)
            .padStart(2, "0");

    }


    function update() {

        const now =
            Date.now();


        let difference =
            targetDate - now;


        // Keep countdown at zero
        // after the event starts.

        if (difference < 0) {

            difference = 0;

        }


        const days =
            Math.floor(
                difference /
                (1000 * 60 * 60 * 24)
            );


        const hours =
            Math.floor(
                (
                    difference /
                    (1000 * 60 * 60)
                ) % 24
            );


        const minutes =
            Math.floor(
                (
                    difference /
                    (1000 * 60)
                ) % 60
            );


        const seconds =
            Math.floor(
                (
                    difference /
                    1000
                ) % 60
            );


        daysEl.textContent =
            pad(days);

        hoursEl.textContent =
            pad(hours);

        minutesEl.textContent =
            pad(minutes);

        secondsEl.textContent =
            pad(seconds);

    }


    // Initial update
    update();


    // Update every second
    setInterval(
        update,
        1000
    );

}