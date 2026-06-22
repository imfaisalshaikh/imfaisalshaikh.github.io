// Initialize EmailJS
emailjs.init("GMTY5sAFjPDYJ61eg");

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const formStatus = document.getElementById("formStatus");
    const submitBtn = document.querySelector(".contact-form .btn");
    
    // Show loading state
    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;
    formStatus.style.display = "none";

    const templateParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_sitra5d", "template_yrsbmuf", templateParams)
        .then(function(response) {
            // Success
            formStatus.textContent = "✅ Message sent successfully! I'll get back to you soon.";
            formStatus.style.color = "#22c55e";
            formStatus.style.display = "block";
            
            // Reset form
            document.getElementById("contactForm").reset();
            submitBtn.textContent = "Send Message";
            submitBtn.disabled = false;
        }, function(error) {
            // Error
            formStatus.textContent = "❌ Error sending message. Please try again.";
            formStatus.style.color = "#ef4444";
            formStatus.style.display = "block";
            submitBtn.textContent = "Send Message";
            submitBtn.disabled = false;
            console.log("EmailJS error:", error);
        });
});

