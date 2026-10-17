// Contact form validation

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const subject =
            document.getElementById("subject").value.trim();

        const message =
            document.getElementById("message").value.trim();


        if (name === "" ||
            email === "" ||
            subject === "" ||
            message === "") {

            alert("Please fill in all the fields.");

            return;
        }


        // Email validation

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            alert("Please enter a valid email address.");

            return;
        }


        alert(
            "Thank you, " +
            name +
            "! Your message has been submitted successfully."
        );


        contactForm.reset();

    });

}


// Display current year automatically

const yearElements =
    document.querySelectorAll("footer");

yearElements.forEach(function(footer) {

    // Footer is already written in HTML.
    // This JavaScript simply confirms the page is loaded.

    console.log("Portfolio page loaded successfully.");

});