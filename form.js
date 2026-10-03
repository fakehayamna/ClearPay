const contactForm = document.querySelector("#contact-form");
const formMessage = document.querySelector("#form-message");

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("#name");
  const email = document.querySelector("#email");
  const subject = document.querySelector("#subject");
  const message = document.querySelector("#message");

  if (
    !name.value.trim() ||
    !email.value.trim() ||
    !subject.value.trim() ||
    !message.value.trim()
  ) {
    formMessage.textContent =
      "Please fill in all required fields.";

    formMessage.className = "form-message error";

    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email.value.trim())) {
    formMessage.textContent =
      "Please enter a valid email address.";

    formMessage.className = "form-message error";

    return;
  }

  formMessage.textContent =
    "✓ Your message has been submitted successfully!";

  formMessage.className = "form-message success";

  contactForm.reset();
});