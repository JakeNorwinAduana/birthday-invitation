document.addEventListener("DOMContentLoaded", () => {

    setupEnvelope();
    startCountdown();
    setupMusic();
    setupRSVP();

});


// ===============================
// ENVELOPE -> MAIN INVITATION
// ===============================

function setupEnvelope() {

    const envelope = document.getElementById("envelope");
    const openingScreen = document.getElementById("openingScreen");
    const mainInvitation = document.getElementById("mainInvitation");

    if (!envelope || !openingScreen || !mainInvitation) return;

    envelope.addEventListener("click", () => {

        // Prevent clicking the envelope multiple times
        envelope.style.pointerEvents = "none";

        // Play the flap-opening animation
        envelope.classList.add("open");

        // Once the flap has opened, cross-fade the two screens
        setTimeout(() => {

            // Reveal the main invitation underneath and fade it in
            mainInvitation.style.display = "block";
            // Force a reflow so the opacity transition actually runs
            mainInvitation.offsetHeight;
            mainInvitation.classList.add("show");

            // Fade the opening screen out at the same time
            openingScreen.classList.add("hide");

            // Once the fade-out finishes, remove the opening screen
            // completely so no invisible/white layer is left behind
            setTimeout(() => {
                openingScreen.remove();
                window.scrollTo(0, 0);
            }, 1200);

        }, 1200);

    });

}


// ===============================
// COUNTDOWN
// ===============================

function startCountdown() {

    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

    // October 17, 2026, 10:00 AM Philippine time
    const targetDate = new Date("2026-10-17T10:00:00+08:00").getTime();

    function pad(num) {
        return String(num).padStart(2, "0");
    }

    function update() {

        const now = Date.now();
        let diff = targetDate - now;

        if (diff < 0) diff = 0;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        daysEl.textContent = pad(days);
        hoursEl.textContent = pad(hours);
        minutesEl.textContent = pad(minutes);
        secondsEl.textContent = pad(seconds);

    }

    update();
    setInterval(update, 1000);

}


// ===============================
// BIRTHDAY MUSIC PLAYER
// ===============================

function setupMusic() {

    const music = document.getElementById("birthdayMusic");
    const playButton = document.getElementById("playButton");

    if (!playButton || !music) return;

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


// ===============================
// RSVP FORM
// ===============================

function setupRSVP() {

    const form = document.getElementById("rsvpForm");
    const status = document.getElementById("rsvpStatus");

    if (!form || !status) return;

    form.addEventListener("submit", async (event) => {

        event.preventDefault();

        const submitButton = form.querySelector(".rsvp-button");
        submitButton.disabled = true;
        status.textContent = "Sending...";

        try {

            const response = await fetch(form.action, {
                method: "POST",
                body: new FormData(form),
                headers: { "Accept": "application/json" }
            });

            if (response.ok) {
                status.textContent = "Thank you! Your RSVP has been received. 💌";
                form.reset();
            } else {
                status.textContent = "Something went wrong. Please try again.";
                submitButton.disabled = false;
            }

        } catch (error) {
            status.textContent = "Something went wrong. Please check your connection and try again.";
            submitButton.disabled = false;
        }

    });

}