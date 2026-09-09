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