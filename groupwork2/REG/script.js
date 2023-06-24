document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("registrationForm");
  const submitButton = form.querySelector('input[type="submit"]');

  submitButton.addEventListener("click", validateForm);

  function validateForm() {
    const requiredInputs = form.querySelectorAll('input[required], textarea[required]');
    let hasError = false;

    requiredInputs.forEach(input => {
      if (input.value.trim() === "") {
        input.style.border = "2px solid red";
        input.addEventListener("input", removeError);

        const alertElement = document.createElement("div");
        alertElement.textContent = "Please fill in this field.";
        alertElement.style.color = "red";
        alertElement.style.fontSize = "14px";
        alertElement.style.marginTop = "5px";

        input.parentNode.insertBefore(alertElement, input.nextSibling);

        hasError = true;
      } else {
        input.style.border = "none";
      }
    });

    if (hasError) {
      alert("Please fill in all required fields.");
      form.reset();
    } else {
      alert("Form submitted successfully!");
    }
  }

  function removeError(event) {
    const input = event.target;
    input.style.border = "none";

    const alertElement = input.nextSibling;
    if (alertElement && alertElement.tagName === "DIV") {
      alertElement.parentNode.removeChild(alertElement);
    }

    input.removeEventListener("input", removeError);
  }

  // Add event listeners
  submitButton.addEventListener("mouseover", function(event) {
    event.target.style.backgroundColor = "lightblue";
  });

  submitButton.addEventListener("mouseout", function(event) {
    event.target.style.backgroundColor = "";
  });

  form.addEventListener("keypress", function(event) {
    if (event.target.tagName !== "INPUT" && event.target.tagName !== "TEXTAREA") {
      return;
    }

    event.target.style.backgroundColor = "lightyellow";
  });

});
