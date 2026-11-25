
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("form-status");
const sendBtn = document.getElementById("sendBtn");

contactForm.addEventListener("submit", async function(event) {
    event.preventDefault();

    sendBtn.disabled = true;
    sendBtn.textContent = "Sending...";

    try {
        const formData = Object.fromEntries(
            new FormData(contactForm).entries()
        );

        const response = await fetch(
            "https://formsubmit.co/ajax/remyndayizeye94@gmail.com",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(formData)
            }
        );

        const data = await response.json();

        if (response.ok && data.success) {
            formStatus.textContent =
                "Message sent successfully!";
            contactForm.reset();
        } else {
            formStatus.textContent =
                "Message failed. Please try again.";
        }

    } catch (error) {
        formStatus.textContent =
            "Connection error. Check your internet.";
    }

    sendBtn.disabled = false;
    sendBtn.textContent = "Send Message";
});
