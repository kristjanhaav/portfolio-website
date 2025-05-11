// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

/* 
Selects all anchor links with a # (internal links).
Adds a click event listener to prevent the default action.
Scrolls smoothly to the target section.
*/

// Modal Interactions
const modal = document.getElementById("project-modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const closeModal = document.querySelector(".close");

// Open Modal Function
function openModal(title, description) {
    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modal.style.display = "block";
}

// Close Modal Function
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close Modal on Outside Click
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// Example Modal Trigger
document.querySelectorAll(".project-link").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const projectTitle = e.target.parentElement.querySelector("h3").textContent;
        const projectDescription = e.target.parentElement.querySelector("p").textContent;
        openModal(projectTitle, projectDescription);
    });
});

// Contact Form Validation
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please fill in all fields.";
        return;
    }

    if (!validateEmail(email)) {
        formMessage.textContent = "Please enter a valid email address.";
        return;
    }

    formMessage.textContent = "Message sent successfully!";
    contactForm.reset();
});

// Email Validation Function
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
